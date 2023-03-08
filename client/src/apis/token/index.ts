import api from '../api'
import GetTradeVolumeRankDto from './dtos/get-trade-volume-rank-dto'

const getTradeVolumeRank = async (datetime: Date, unit: number) => {
  try {
    const { data } = await api.get<{ payload: GetTradeVolumeRankDto }>(
      `token/rank/trade-volume`,
      {
        params: { datetime, unit },
      },
    )
    console.log(data.payload)
    return data.payload
  } catch (e: any) {
    throw Error(e)
  }
}

const tokenApi = {
  getTradeVolumeRank,
}

export default tokenApi
