import { Controller, Get } from '@nestjs/common'
import { TokenService } from './token.service'
import { Upbit } from '../utils/upbit'
import { krwTokens } from 'src/config/upbit/tokens'

@Controller('token')
export class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    // private readonly upbit: Upbit
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

  @Get()
  getMinutesCandles(): any {
    return this.tokenService.getToken('bitcoin', '0')
  }
}