import { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ko'
import { useGetTradeVolumeRankQuery } from '../../redux/api/token/tradeVolume/tradeVolumeSlice'
import { setDatetime } from '../../redux/datetime/datetimeSlice'
import { setUnitData } from '../../redux/unit/unitSlice'
import { setOption } from '../../redux/option/optionSlice'

export default function useControlPanel() {
  const dispatch = useDispatch()
  const [openPanel, setOpenPanel] = useState(true)
  const [radioOption, setRadioOption] = useState<RadioOptionType>('VOLUME')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState({
    value: date.getHours(),
    displayText: `${moment(date.getHours(), 'H').format('a hh')}시`,
  })
  const [unit, setUnit] = useState({ value: 1, displayText: '1시간' })

  const ISODatetime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.value,
  ).toISOString()

  const { refetch } = useGetTradeVolumeRankQuery({
    unit: unit.value,
    datetime: ISODatetime,
  })

  const handleTogglePanel = () => {
    setOpenPanel(!openPanel)
  }

  const handleClickApplyOption = () => {
    dispatch(setDatetime(ISODatetime))
    dispatch(setUnitData(unit.value))
    dispatch(setOption(radioOption))
    refetch()
  }

  return {
    openPanel,
    radioOption,
    setRadioOption,
    date,
    setDate,
    time,
    setTime,
    unit,
    setUnit,
    handleTogglePanel,
    handleClickApplyOption,
  }
}
