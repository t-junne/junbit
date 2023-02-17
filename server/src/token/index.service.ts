import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { TickerService } from './ticker/ticker.service'
import { makeInterval } from 'src/utils/interval'
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank1H.service'

@Injectable()
export class TokenService implements OnApplicationBootstrap {
  constructor(
    private readonly minuteCandleService: MinuteCandleService,
    private readonly tickerService: TickerService,
    private readonly tradeVolumeRankService: TradeVolumeRankService,
  ) {}

  async onApplicationBootstrap() {

    const date = new Date()
    const baseTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
    )

    // for (let i=50; i < 199; i++) {
    //   const date = new Date(2023, 1, 8, i + 20 + 9)
    //   await this.tradeVolumeRankService.create(1, date)
    // }
    // makeInterval(async () => {
    //   const date = new Date()
    //   const baseTime = new Date(
    //     date.getFullYear(),
    //     date.getMonth(),
    //     date.getDate(),
    //     date.getHours(),
    //   )
    
    //   await this.tickerService.create()
    //   await this.minuteCandleService.create(60, 25)
    //   await this.tradeVolumeRankService.create(1, baseTime)
    //   await this.minuteCandleService.delete(60)
    // })
  }
}
