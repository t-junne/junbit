import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TradeVolumeRankController } from './tradeVolumeRank.controller'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank1H.entity'
import { TradeVolumeRankService } from './tradeVolumeRank1H.service'
import { Upbit } from '@lib/utils/upbit'

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenTradeVolumeRank]),
  ],
  controllers: [TradeVolumeRankController],
  providers: [TradeVolumeRankService, Upbit],
})
export class TradeVolumeRankModule {}
