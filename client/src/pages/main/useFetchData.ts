import { useSelector } from 'react-redux'
import { useGetTradeVolumeRankQuery } from '../../redux/api/token/tradeVolume/tradeVolumeSlice'
import { currentDatetime } from '../../redux/datetime/datetimeSlice'
import { currentUnit } from '../../redux/unit/unitSlice'
import { currentOption } from '../../redux/option/optionSlice'

export default function useFetchData() {
  const datetime = useSelector(currentDatetime)
  const unit = useSelector(currentUnit)
  const option = useSelector(currentOption)
  const { data, isLoading } = useGetTradeVolumeRankQuery({ unit, datetime })

  return {
    option,
    data: data?.payload,
    isLoading,
  }
}
