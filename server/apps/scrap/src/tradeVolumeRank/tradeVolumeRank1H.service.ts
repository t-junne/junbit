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
    private readonly minuteCandleService: MinuteCandleService,
  ) {}

  async create(hours: HoursType, baseTime: Date) {
    
    const data: FindMinuteCandle[] = await this.minuteCandleService.find(
      hours,
      baseTime,
    )

    if (data.length === 0) { return }

    const sortedDataByDiffRate = data.sort(
      (a: FindMinuteCandle, b: FindMinuteCandle) =>
        b.volumeDiffRate - a.volumeDiffRate,
    )

    const { year, month, date, hour } = convertDatetime(baseTime)
    const newBasetime = new Date(year, month, date, hour)
    const prevTime = new Date(year, month, date, hour - hours)
    const prevDay = new Date(year, month, date, hour - 24)

    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    try {
      data.forEach(async (value) => {
        const id = await this.findIdByDatetime(value.market, hours, newBasetime)
        if (id) {
        } else {
          const prevRank = await this.findRankByDatetime(
            value.market,
            hours,
            prevTime,
          )
          const prevDayRank = await this.findRankByDatetime(
            value.market,
            hours,
            prevDay,
          )
          const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create({
            diffRateRank:
              sortedDataByDiffRate.findIndex(
                (item) => item.market === value.market,
              ) + 1,
            prevDiffRateRank: prevRank ? prevRank.diffRateRank : undefined,
            prevDayDiffRateRank: prevDayRank
              ? prevDayRank.diffRateRank
              : undefined,
            market: value.market,
            volumeDiff: value.volumeDiff,
            volumeDiffRate: value.volumeDiffRate,
            datetime: newBasetime,
          })

          await this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank)
        }
      })
    } catch (e: any) {
      throw Error(e)
    }
  }

  async delete(hours: HoursType, datetime: Date) {
    const { year, month, date, hour } = convertDatetime(datetime)
    const baseTime = new Date(year, month, date - 14, hour)

    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    await this.tokenTradeVolumeRankRepsitory.createQueryBuilder()
      .delete()
      .from(`trade_volume_rank_${hours}h`)
      .where('datetime < :datetime', { datetime: baseTime })
      .execute()
  };

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
