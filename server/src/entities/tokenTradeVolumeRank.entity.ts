import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TokenTradeVolumeRank {
  @PrimaryColumn()
  id: number;

  @Column()
  candleDateTimeUtc: string;

  @Column()
  candleDateTimeKst: string;

  @Column()
  openingPrice: number;

  @Column()
  highPrice: number;

  @Column()
  lowPrice: number;

  @Column()
  tradePrice: number;

  @Column()
  timestamp: string;

  @Column()
  candleAccTradePrice: number;

  @Column()
  candleAccTradeVolume: number;

  @Column()
  unit: number;
}
