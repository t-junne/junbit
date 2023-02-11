import api from "../../api"
import { GetTickersDto } from "./tokenDto";

const getTickers = async () => {
  const { data } = await api.get<{ payload: GetTickersDto }>('/token/upbit/ticker/krw');
  return data
}


const upbitApi = {
  getTickers
}

export default upbitApi