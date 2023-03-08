import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank1H.entity'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { convertDatetime } from '@lib/utils/datetime'

@Injectable()
export class TradeVolumeRankService {
  constructor(
    @InjectRepository(TokenTradeVolumeRank)
    private readonly tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>,
    private readonly minuteCandleService: MinuteCandleService
  ) {}

  async create(hours: HoursType, baseTime: Date) {
    const data: FindMinuteCandle[] = await this.minuteCandleService.find(
      hours,
      baseTime,
    )

    const sortedDataByDiffRate = data.sort(
      (a: FindMinuteCandle, b: FindMinuteCandle) =>
        b.volumeDiffRate - a.volumeDiffRate,
    )

    const { year, month, date, hour } = convertDatetime(baseTime)

    const prevTime = new Date(year, month, date, hour - hours)
    const prevDay = new Date(year, month, date - 1, hour)

    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`
      
    try {
      data.forEach(async (value) => {
        const id = await this.findIdByDatetime(value.market, hours, baseTime)
        if (id) {
        } else {
          const prevRank = await this.findRankByDatetime(value.market, hours, prevTime)
          const prevDayRank = await this.findRankByDatetime(value.market, hours, prevDay)
          console.log(value.market, prevRank, prevDayRank)
          const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create({
            diffRateRank:
              sortedDataByDiffRate.findIndex(
                (item) => item.market === value.market,
              ) + 1,
            prevDiffRateRank: prevRank
              ? prevRank.diffRateRank
              : undefined,
            prevDayDiffRateRank: prevDayRank
              ? prevDayRank.diffRateRank
              : undefined,
            market: value.market,
            volumeDiff: value.volumeDiff,
            volumeDiffRate: value.volumeDiffRate,
            datetime: baseTime,
          })

          await this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank)
        }
      })
    } catch (e: any) {
      throw Error(e)
    }
  }

  async findRankByDatetime(market: string, hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { diffRateRank: true },
      where: { market: market, datetime: datetime },
    })
  }

  async findIdByDatetime(market: string, hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { id: true },
      where: { market: market, datetime: datetime },
    })
  }
}
