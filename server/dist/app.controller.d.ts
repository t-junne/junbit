import { AppService } from './app.service';
import { Upbit } from './utils/upbit';
export declare class AppController {
    private readonly appService;
    upbit: Upbit;
    constructor(appService: AppService);
    getAllMarkets(): Promise<any>;
}
