import { Controller, Get } from '@nestjs/common';
import { MinuteCandleService } from './minuteCandle.service';

@Controller('token')
export class MinuteCandleController {
  constructor(
    private readonly minuteCandleService: MinuteCandleService, // private readonly upbit: Upbit
  ) {}

  // @Get('/upbit/ticker/krw')
  // async getTickers(): Promise<any> {
  //   const markets: string[] = []
  //   markets.push(...krwTokens.map((item) => (item.market)))
  //   const data = await this.upbit.getTickers(markets.toString())

  //   return data
  // }

  // @Get('/upbit/dayscandle/krw')
  // async getDaysCandles(): Promise<any> {
  //   const result = []
  //   for (let i of krwTokens) {
  //     const data = await this.upbit.getDaysCandles(i.market)
  //   }

  //   // return result
  // }
}
