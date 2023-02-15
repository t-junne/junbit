import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticker, TickerDocument } from 'src/schemas/ticker.schema';
import { CreateTickerDto } from './dtos/create-ticker-dto';
import { Upbit } from 'src/utils/upbit';
import { markets } from 'src/config/upbit/tokens';

interface ResponseType extends CreateTickerDto {}

@Injectable()
export class TickerService {
  constructor(
    @InjectModel(Ticker.name)
    private readonly tickerModel: Model<TickerDocument>,
    private readonly upbit: Upbit,
  ) {}

  async create(): Promise<void> {
    const responses: ResponseType[] = await this.upbit.getTicker(
      markets.toString(),
    );
    const date = new Date();
    const currentTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
    );

    console.log('Saving Tickers...');

    for (let item of responses) {
      const ticker = new this.tickerModel();
      ticker.market = item.market;
      ticker.acc_trade_price_24h = item.acc_trade_price_24h;
      ticker.acc_trade_volume_24h = item.acc_trade_volume_24h;
      ticker.created_at = currentTime;

      await ticker.save();
    }
    console.log('Done');
  }

  async delete(): Promise<void> {
    const time = new Date('2023-02-14T07:00:00.000+00:00');
    console.log(time);
    const result = await this.tickerModel.find({ created_at: time });

    console.log(result);
  }

  async find() {}
}
