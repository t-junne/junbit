import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Upbit } from './utils/upbit';


@Controller()
export class AppController {
  upbit = new Upbit();
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllMarkets() {
    const response = await this.upbit.getAllMarkets();
    return response;
  }
}
