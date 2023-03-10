declare type HoursType = 1 | 2 | 3 | 4 | 8 | 12
declare type MinutesType = 30 | 60 | 120 | 180 | 240
declare type FindMinuteCandle = {
  market: string
  volumeDiff: number
  volumeDiffRate: number
  datetime: Date
}
