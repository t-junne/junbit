declare module '*.otf' {
  const value: any
  export = value
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.svg' {
  const value: any
  export = value
}

type RadioOptionType = 'VOLUME' | 'PRICE'
interface TradeVolumeRankDto {
  datetime: Date
  diffRateRank: number
  market: string
  prevDayDiffRateRank: number | null
  prevDiffRateRank: number | null
  volumeDiff: number
  volumeDiffRate: number
}

interface TokenData {
  [key: string]: {
    kr_name: string
    en_name: string
  }
}
