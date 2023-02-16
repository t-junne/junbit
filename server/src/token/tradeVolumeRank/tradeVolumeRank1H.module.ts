import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleModule } from '../minuteCandle/minuteCandle.module'
import { TokenTradeVolumeRank } from 'src/entities/token/tradeVolumeRank1H.entity'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from 'src/schemas/minute-candle.schema'
import { TradeVolumeRankService } from './tradeVolumeRank1H.service'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { Upbit } from 'src/utils/upbit'

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenTradeVolumeRank]),
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
    MinuteCandleModule,
  ],
  providers: [TradeVolumeRankService, MinuteCandleService, Upbit],
})
export class TradeVolumeRankModule {}
