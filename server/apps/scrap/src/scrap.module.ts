import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module'
import { TickerModule } from './ticker/ticker.module'
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank1H.module'
import { ScrapService } from './scrap.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    DatabaseModule,
    MinuteCandleModule,
    TickerModule,
    TradeVolumeRankModule,
  ],
  providers: [ScrapService],
})
export class ScrapModule {}
