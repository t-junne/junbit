export interface ResponseType {
  market: string
  candle_date_time_utc: Date
  candle_date_time_kst: Date
  opening_price: number
  low_price: number
  timestamp: string
  candle_acc_trade_price: number
  candle_acc_trade_volume: number
  acc_trade_price_24h?: number
  acc_trade_volume_24h?: number
  unit: number
}
