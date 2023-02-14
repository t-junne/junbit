import { Model } from 'mongoose';
import { MinuteCandleDocument } from 'src/schemas/minute-candle.schema';
import { Upbit } from 'src/utils/upbit';
type MinutesType = 30 | 60 | 120 | 180 | 240;
export declare class MinuteCandleService {
    private minuteCandleModel;
    private readonly upbit;
    constructor(minuteCandleModel: Model<MinuteCandleDocument>, upbit: Upbit);
    create(unit: MinutesType, count: number): Promise<void>;
    delete(unit: MinutesType): Promise<void>;
    find(minutes: MinutesType, period: number): Promise<any[]>;
}
export {};
