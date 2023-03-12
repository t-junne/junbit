import { useSelector } from 'react-redux'
import { useGetTradeVolumeRankQuery } from '../../redux/api/token/tradeVolume/tradeVolumeSlice'
import { currentDatetime } from '../../redux/datetime/datetimeSlice'
import { currentUnit } from '../../redux/unit/unitSlice'
import { currentRadioOption } from '../../redux/radioOption/radioOptionSlice'

export default function useFetchData() {
  const datetime = useSelector(currentDatetime)
  const unit = useSelector(currentUnit)
  const option = useSelector(currentRadioOption)

  const resetDatetime = (datetime: string, unit: UnitType) => {
    const date = new Date(datetime)
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours() - unit
    ).toISOString()
  }
  const { data, isLoading } = useGetTradeVolumeRankQuery({ unit: unit.value, datetime }, { refetchOnMountOrArgChange: false })
  const { data: prevTermData, isLoading: isPrevTermDataLoading } = useGetTradeVolumeRankQuery({ unit: unit.value, datetime: resetDatetime(datetime, unit.value) }, { refetchOnMountOrArgChange: false })
  return {
    datetime,
    unit,
    option,
    resetDatetime,
    data: data?.payload,
    isLoading,
    prevTermData: prevTermData?.payload,
    isPrevTermDataLoading,
  }
}
