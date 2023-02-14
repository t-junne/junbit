import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { MinuteCandleService } from './minuteCandle/minuteCandle.service';
import { TickerService } from './ticker/ticker.service';
import { makeInterval } from 'src/utils/interval';

@Injectable()
export class TokenService implements OnApplicationBootstrap {
  constructor(
    private readonly minuteCandleService: MinuteCandleService,
    private readonly tickerService: TickerService,
  ) {}

  onApplicationBootstrap() {
    makeInterval(async () => {
      await this.tickerService.create();
      await this.minuteCandleService.create(60, 25);
      await this.minuteCandleService.delete(60);
    });
  }
}
