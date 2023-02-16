import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class TokenTradeVolumeRank {
  @PrimaryColumn()
  id: number

  @Column('int')
  diffRateRanking: number

  @Column('int')
  prevDiffRateRanking: number

  @Column('int')
  prevDayDiffRateRanking: number

  @Column('varchar')
  market: string

  @Column('double')
  volumeDiff: number

  @Column('double')
  volumeDiffRate: number

  @Column('datetime')
  datetime: Date
}
