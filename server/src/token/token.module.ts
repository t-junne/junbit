import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module';
import { TickerModule } from './ticker/ticker.module';
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank1H.module';
import { TokenService } from './token.service';
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank1H.service';
import { TokenTradeVolumeRank } from 'src/entities/token/tradeVolumeRank1H.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenTradeVolumeRank]),
    MinuteCandleModule,
    TickerModule,
    TradeVolumeRankModule,
  ],
  providers: [TokenService, TradeVolumeRankService],
})
export class TokenModule {}
