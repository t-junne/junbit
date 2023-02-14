import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MinuteCandle,
  MinuteCandleDocument,
} from 'src/schemas/minute-candle.schema';
import { CreateMinuteCandleDto } from './dtos/create-minute-candle-dto';
import { Upbit } from 'src/utils/upbit';
import { sleep } from 'src/utils/sleep';
import { krwTokens } from 'src/config/upbit/tokens';

interface ResponseType extends CreateMinuteCandleDto {}
type MinutesType = 30 | 60 | 120 | 180 | 240;

@Injectable()
export class MinuteCandleService {
  constructor(
    @InjectModel(MinuteCandle.name)
    private minuteCandleModel: Model<MinuteCandleDocument>,
    private readonly upbit: Upbit,
  ) {}

  async create(unit: MinutesType, count: number): Promise<void> {
    console.log(`Saving MinuteCandles`);

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const start = Date.now();
      const responses: ResponseType[] = await this.upbit.getMinuteCandle(
        unit,
        krwTokens[i - 1].market,
        count,
      );
      for (let j = responses.length - 1; j > 0; j--) {
        const utcDate = new Date(`${responses[j].candle_date_time_utc}.000Z`);
        const kstDate = new Date(`${responses[j].candle_date_time_kst}.000Z`);
        const matchData = await this.minuteCandleModel.findOne({
          market: responses[j].market,
          timestamp: responses[j].timestamp,
        });

        if (matchData) {
        } else {
          const tokenCandle = new this.minuteCandleModel(responses[j]);
          tokenCandle.candle_date_time_utc = utcDate;
          tokenCandle.candle_date_time_kst = kstDate;
          await tokenCandle.save();
        }
      }
      const now = Date.now();

      if (i % 10 == 0 && now - start < 1000) {
        await sleep(1100 - (now - start));
      }
    }
    console.log('Done');
  }

  async delete(unit: MinutesType): Promise<void> {
    console.log('Deleteing MinuteCandles');

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const start = Date.now();
      const utcDate: ResponseType[] = await this.upbit.getMinuteCandle(
        unit,
        krwTokens[i - 1].market,
        1,
      );
      const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`);
      const newDate = new Date(date.setDate(date.getDate() - 5));

      await this.minuteCandleModel.deleteMany({
        market: krwTokens[i - 1].market,
        candle_date_time_utc: { $lt: newDate },
      });
      const now = Date.now();

      if (i % 10 == 0 && now - start < 1000) {
        await sleep(1100 - (now - start));
      }
    }
    console.log('Done');
  }

  async find(minutes: MinutesType, period: number) {
    const array = [];

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const obj: any = {};
      const data = await this.minuteCandleModel
        .find({ market: krwTokens[i - 1].market })
        .sort({ candle_date_time_utc: -1 })
        .limit(2);

      obj.tokenName = krwTokens[i - 1].kr_name;
      obj.tradeVolumeDiff =
        data[0].candle_acc_trade_volume - data[1].candle_acc_trade_volume;
      obj.tradeVolumeDiffRate =
        obj.tradeVolumeDiff / data[1].candle_acc_trade_volume;
      obj.tradePriceDiff =
        data[0].candle_acc_trade_price - data[1].candle_acc_trade_price;
      obj.tradePriceDiffRate =
        obj.tradePriceDiff / data[1].candle_acc_trade_price;
      array.push(obj);
    }

    return array;
  }
}
