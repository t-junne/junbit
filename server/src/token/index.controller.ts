import { Controller, Get, Query } from "@nestjs/common";
import { TradeVolumeRankService } from "./tradeVolumeRank/tradeVolumeRank1H.service";
import { HoursType } from "./minuteCandle/minuteCandle.service"

@Controller('token')
export class TokenController {
  constructor(
    private readonly tradeVolumeRankService: TradeVolumeRankService
  ) {}
  
  @Get('hi')
  async hi() {
    return 'hi'
  }

  @Get('rank/trade-volume')
  async findAndSortByRank(@Query('datetime') datetime: Date, @Query('unit') unit: HoursType) {
    return this.tradeVolumeRankService.findAllByDatetime(unit, datetime)
  }


}