import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Token } from 'src/entities/token.entity';
import { MinuteCandleService } from './minuteCandle.service';
import { MinuteCandleController } from './minuteCandle.controller';
// import { minuteCandleProviders } from 'src/providers/token/minuteCandle.provider';
import {
  MinuteCandle,
  MinuteCandleSchema,
} from 'src/schemas/minute-candle.schema';
import { Upbit } from 'src/utils/upbit';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
  ],
  controllers: [MinuteCandleController],
  providers: [MinuteCandleService, Upbit],
  exports: [MinuteCandleService],
})
export class MinuteCandleModule {}
