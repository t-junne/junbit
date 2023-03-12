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

    // await this.minuteCandleService.create(60, 25)
    // console.log('start')
    // for (let i=0; i < 25; i++) {
    //   const baseTime = new Date(2023, 2, 11, i + 13 + 9)
    //   console.log(baseTime)
    //   // await this.tradeVolumeRankService.create(1, baseTime)
    //   await this.tradeVolumeRankService.create(2, baseTime)
    //   await this.tradeVolumeRankService.create(4, baseTime)
    //   await this .tradeVolumeRankService.create(8, baseTime)
    //   await this.tradeVolumeRankService.create(12, baseTime)
    // }
    // console.log('done')
    
    makeInterval(async () => {
      const date = new Date()
      const baseTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
      )
    console.log(baseTime)
      await this.tickerService.create()
      await this.minuteCandleService.create(60, 2)
      await this.tradeVolumeRankService.create(1, baseTime)
      await this.tradeVolumeRankService.create(2, baseTime)
      await this.tradeVolumeRankService.create(4, baseTime)
      await this.tradeVolumeRankService.create(8, baseTime)
      await this.tradeVolumeRankService.create(12, baseTime)
      await this.minuteCandleService.delete(60)
      await this.tradeVolumeRankService.delete(1, baseTime)
      await this.tradeVolumeRankService.delete(2, baseTime)
      await this.tradeVolumeRankService.delete(4, baseTime)
      await this.tradeVolumeRankService.delete(8, baseTime)
      await this.tradeVolumeRankService.delete(12, baseTime)
      console.log(`Done at ${baseTime}`)
    })
  }
}
