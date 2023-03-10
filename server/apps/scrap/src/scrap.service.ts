import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service';
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank1H.service';
import { TickerService } from './ticker/ticker.service';
import { makeInterval } from '@lib/utils/interval';

@Injectable()
export class ScrapService implements OnApplicationBootstrap {
  constructor(
    private readonly tickerService: TickerService,
    private readonly minuteCandleService: MinuteCandleService,
    private readonly tradeVolumeRankService: TradeVolumeRankService
  ) {}
  async onApplicationBootstrap() {

    console.log('Saving Trade Volume Data')
    makeInterval(async () => {
      const date = new Date()
      const baseTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
      )
    
      await this.tickerService.create()
      await this.minuteCandleService.create(60, 25)
      await this.tradeVolumeRankService.create(1, baseTime)
      await this.tradeVolumeRankService.create(2, baseTime)
      await this.tradeVolumeRankService.create(4, baseTime)
      await this.tradeVolumeRankService.create(8, baseTime)
      await this.tradeVolumeRankService.create(12, baseTime)
      await this.minuteCandleService.delete(60)
    })
    console.log('Done')
    // this.minuteCandleService.create(60, 10)
  }
}
