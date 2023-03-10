import { useCallback, useEffect, useRef, useState } from 'react'

export default function useDatetime() {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [openTimeOption, setOpenTimeOption] = useState(false)
  const [wide, setWide] = useState(false)

  const calendarRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const timeOptionRef = useRef<HTMLDivElement>(null)

  const handleOpenCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenTimeOption(false)
    setOpenCalendar(true)
  }

  const handleCloseCalendar = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (openCalendar && !calendarRef.current?.contains(target)) {
        setOpenCalendar(false)
      }
    },
    [openCalendar],
  )

  const handleClickCloseCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenCalendar(false)
  }

  const handleToggleTimeOption = () => {
    setOpenTimeOption(!openTimeOption)
  }

  const handleCloseTimeOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (openTimeOption && !timeOptionRef.current?.contains(target)) {
        setOpenTimeOption(false)
      }
    },
    [openTimeOption],
  )

  useEffect(() => {
    window.addEventListener('click', (e) => {
      handleCloseCalendar(e)
      handleCloseTimeOption(e)
    })
    return () => {
      window.removeEventListener('click', (e) => {
        handleCloseCalendar(e)
        handleCloseTimeOption(e)
      })
    }
  }, [handleCloseCalendar, handleCloseTimeOption])

  return {
    openCalendar,
    setOpenCalendar,
    openTimeOption,
    wide,
    setWide,
    calendarRef,
    closeButtonRef,
    timeOptionRef,
    handleOpenCalendar,
    handleClickCloseCalendar,
    handleToggleTimeOption,
  }
}
