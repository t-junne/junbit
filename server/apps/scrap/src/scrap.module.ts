import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module'
import { TickerModule } from './ticker/ticker.module'
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank1H.module'
import { ScrapService } from './scrap.service'
import { TickerService } from './ticker/ticker.service'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank1H.service'
import { Upbit } from '@lib/utils/upbit'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank1H.entity'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forFeature([TokenTradeVolumeRank]),
    DatabaseModule,
    MinuteCandleModule,
    TickerModule,
    TradeVolumeRankModule,
  ],
  providers: [ScrapService, TickerService, MinuteCandleService, TradeVolumeRankService, Upbit],
})
export class ScrapModule {}
