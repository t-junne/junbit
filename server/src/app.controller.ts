import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { krwTokens } from './config/upbit/tokens'

@Controller('hi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllMarkets() {
    const response: any = []
    for (let token of krwTokens) {
      response.push({
        market: token.market,
        kr_name: token.kr_name,
        en_name: token.en_name.toLowerCase(),
      })
    }
    return response
  }
}
