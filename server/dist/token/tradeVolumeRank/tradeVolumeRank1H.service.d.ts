import { Repository } from 'typeorm';
import { TokenTradeVolumeRank } from 'src/entities/token/tradeVolumeRank1H.entity';
import { HoursType, MinuteCandleService } from '../minuteCandle/minuteCandle.service';
export declare class TradeVolumeRankService {
    private readonly tokenTradeVolumeRankRepsitory;
    private readonly minuteCandleService;
    constructor(tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>, minuteCandleService: MinuteCandleService);
    create(hours: HoursType, baseTime: Date): Promise<void>;
    findRankByDatetime(hours: HoursType, datetime: Date): Promise<TokenTradeVolumeRank | null>;
    findByDatetime(hours: HoursType, datetime: Date): Promise<TokenTradeVolumeRank | null>;
}
