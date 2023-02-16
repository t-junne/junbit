import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleService } from './minuteCandle.service'
import { MinuteCandleController } from './minuteCandle.controller'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from 'src/schemas/minute-candle.schema'
import { Upbit } from 'src/utils/upbit'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
  ],
  controllers: [MinuteCandleController],
  providers: [MinuteCandleService, Upbit],
  exports: [MinuteCandleService, MongooseModule],
})
export class MinuteCandleModule {}
