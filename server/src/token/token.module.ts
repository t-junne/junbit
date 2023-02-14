import { Module } from '@nestjs/common';
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module';
import { TickerModule } from './ticker/ticker.module';
import { TokenService } from './token.service';

@Module({
  imports: [MinuteCandleModule, TickerModule],
  providers: [TokenService],
})
export class TokenModule {}
