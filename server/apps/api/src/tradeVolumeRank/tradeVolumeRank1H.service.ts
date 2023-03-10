import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank1H.entity'
import { convertDatetime } from '@lib/utils/datetime'
import { GetTradeVolumeRankDto } from './dtos/get-trade-volume-rank-dto'

@Injectable()
export class TradeVolumeRankService {
  constructor(
    @InjectRepository(TokenTradeVolumeRank)
    private readonly tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>,
  ) {}

  async findAllByDatetime(datetime: Date, hours: HoursType) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`
    const baseTime = new Date(datetime)
    const { year, month, date, hour } = convertDatetime(baseTime)
    const newDate = new Date(year, month, date, hour)

    const data: GetTradeVolumeRankDto[] =
      await this.tokenTradeVolumeRankRepsitory.find({
        select: {
          diffRateRank: true,
          prevDiffRateRank: true,
          prevDayDiffRateRank: true,
          market: true,
          volumeDiff: true,
          volumeDiffRate: true,
          datetime: true,
        },
        where: { datetime: newDate },
        order: { diffRateRank: 'asc' },
      })

    return { payload: data }
  }
}
