import { OnApplicationBootstrap } from '@nestjs/common';
import { MinuteCandleService } from './minuteCandle/minuteCandle.service';
import { TickerService } from './ticker/ticker.service';
export declare class TokenService implements OnApplicationBootstrap {
    private readonly minuteCandleService;
    private readonly tickerService;
    constructor(minuteCandleService: MinuteCandleService, tickerService: TickerService);
    onApplicationBootstrap(): void;
}
