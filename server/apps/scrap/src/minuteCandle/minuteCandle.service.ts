import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  MinuteCandle,
  MinuteCandleDocument,
} from '@lib/schemas/minuteCandle.schema'
import { Upbit } from '@lib/utils/upbit'
import { sleep } from '@lib/utils/sleep'
import { krwTokens } from '../infra/upbit/tokens'
import { FindMinuteCandleDto } from './dtos/find-minute-dto'
import { convertDatetime } from '@lib/utils/datetime'
import { ResponseType } from '../types/responseType'

@Injectable()
export class MinuteCandleService {
  constructor(
    @InjectModel(MinuteCandle.name)
    private readonly minuteCandleModel: Model<MinuteCandleDocument>,
    private readonly upbit: Upbit,
  ) {}

  async create(unit: MinutesType, count: number): Promise<void> {
    console.log(`Saving MinuteCandles`)

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const start = Date.now()
      const responses: ResponseType[] = await this.upbit.getMinuteCandle(
        unit,
        krwTokens[i - 1].market,
        count,
      )
      console.log(krwTokens[i - 1].kr_name)
      for (let j = responses.length - 1; j > 0; j--) {
        const utcDate = new Date(`${responses[j].candle_date_time_utc}.000Z`)
        const kstDate = new Date(`${responses[j].candle_date_time_kst}.000Z`)
        const matchData = await this.minuteCandleModel.findOne({
          market: responses[j].market,
          timestamp: responses[j].timestamp,
        })

        if (matchData) {
        } else {
          const tokenCandle = new this.minuteCandleModel(responses[j])
          tokenCandle.candle_date_time_utc = utcDate
          tokenCandle.candle_date_time_kst = kstDate
          await tokenCandle.save()
        }
      }
      const now = Date.now()

      if (i % 10 == 0 && now - start < 1000) {
        await sleep(1200 - (now - start))
      }
    }
    console.log('Done')
  }

  async delete(unit: MinutesType): Promise<void> {
    console.log('Deleteing MinuteCandles')

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const start = Date.now()
      const utcDate: ResponseType[] = await this.upbit.getMinuteCandle(
        unit,
        krwTokens[i - 1].market,
        1,
      )
      const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`)
      const newDate = new Date(date.setDate(date.getDate() - 14))

      await this.minuteCandleModel.deleteMany({
        market: krwTokens[i - 1].market,
        candle_date_time_utc: { $lt: newDate },
      })
      const now = Date.now()

      if (i % 10 == 0 && now - start < 1000) {
        await sleep(1100 - (now - start))
      }
    }
    console.log('Done')
  }

  async find(
    hours: HoursType,
    baseTime: Date,
    loop = true,
  ): Promise<any | FindMinuteCandleDto[]> {
    if (loop) {
      let array: any = []

      for (let value of krwTokens) {
        const obj: any = {}
        const data = await this.minuteCandleModel
          .find(
            { market: value.market, candle_date_time_utc: { $lte: baseTime } },
            { _id: 0, __v: 0 },
          )
          .sort({ candle_date_time_utc: -1 })
          .limit(hours * 2)

        const volumeSum = data
          .slice(0, data.length / 2)
          .reduce(
            (accumulator, object) =>
              accumulator + object.candle_acc_trade_volume,
            0,
          )
        const prevVolumeSum = data
          .slice(data.length / 2)
          .reduce(
            (accumulator, object) =>
              accumulator + object.candle_acc_trade_volume,
            0,
          )

        obj.market = data[0].market
        obj.volumeDiff = volumeSum - prevVolumeSum
        obj.volumeDiffRate = obj.volumeDiff / prevVolumeSum
        obj.datetime = baseTime

        array.push(obj)
      }

      return array
    } else {
      const { year, month, date, hour } = convertDatetime(baseTime)
      const datetimeLimit = new Date(year, month, date, hour - hours * 2)
      const data = await this.minuteCandleModel.find(
        { candle_date_time_utc: { $lte: baseTime, $gt: datetimeLimit } },
        { _id: 0, __v: 0 },
      )

      return data
    }
  }
}
