import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TickerService } from './ticker.service';
import { Ticker, TickerSchema } from 'src/schemas/ticker.schema';
import { Upbit } from 'src/utils/upbit';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticker.name, schema: TickerSchema }]),
  ],
  // controllers: [MinuteCandleController],
  providers: [TickerService, Upbit],
  exports: [TickerService, MongooseModule],
})
export class TickerModule {}
