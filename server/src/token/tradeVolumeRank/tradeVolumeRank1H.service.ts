import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenTradeVolumeRank } from 'src/entities/token/tradeVolumeRank1H.entity';
import {
  HoursType,
  MinuteCandleService,
} from '../minuteCandle/minuteCandle.service';
import { FindMinuteCandleDto } from '../minuteCandle/dtos/find-minute-dto';

@Injectable()
export class TradeVolumeRankService {
  constructor(
    @InjectRepository(TokenTradeVolumeRank)
    private readonly tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>,
    private readonly minuteCandleService: MinuteCandleService,
  ) {}

  async create(hours: HoursType, baseTime: Date) {
    const data: FindMinuteCandleDto[] = await this.minuteCandleService.find(
      hours,
      baseTime,
    );

    const sortedDataByDiffRate = data.sort(
      (a: FindMinuteCandleDto, b: FindMinuteCandleDto) =>
        b.volumeDiffRate - a.volumeDiffRate,
    );

    const year = baseTime.getFullYear();
    const month = baseTime.getMonth();
    const date = baseTime.getDate();
    const hour = baseTime.getHours();

    const prevTime = new Date(year, month, date, hour - hours);
    const prevDay = new Date(year, month, date - 1, hour);
    const prevRank = await this.findRankByDatetime(hours, prevTime);
    const prevDayRank = await this.findRankByDatetime(hours, prevDay);
    const id = await this.findByDatetime(hours, baseTime);

    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;

    try {
      data.forEach(async (value) => {
        if (id) {
        } else {
          const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create({
            diffRateRanking:
              sortedDataByDiffRate.findIndex(
                (item) => item.market === value.market,
              ) + 1,
            prevDiffRateRanking: prevRank
              ? prevRank.diffRateRanking
              : undefined,
            prevDayDiffRateRanking: prevDayRank
              ? prevDayRank.diffRateRanking
              : undefined,
            market: value.market,
            volumeDiff: value.volumeDiff,
            volumeDiffRate: value.volumeDiffRate,
            datetime: baseTime,
          });

          await this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank);
        }
      });
    } catch (e: any) {
      throw Error(e);
    }
  }

  async findRankByDatetime(hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { diffRateRanking: true },
      where: { datetime: datetime },
    });
  }

  async findByDatetime(hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { id: true },
      where: { datetime: datetime },
    });
  }
}
