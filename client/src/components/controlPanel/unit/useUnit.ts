import { useCallback, useEffect, useRef, useState } from 'react'

export default function useUnit() {
  const [openUnitOption, setOpenUnitOption] = useState(false)
  const unitOptionRef = useRef<HTMLDivElement>(null)

  const handleToggleUnitOption = () => {
    setOpenUnitOption(!openUnitOption)
  }

  const handleCloseUnitOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (openUnitOption && !unitOptionRef.current?.contains(target)) {
        setOpenUnitOption(false)
      }
    },
    [openUnitOption],
  )

  useEffect(() => {
    window.addEventListener('click', (e) => {
      handleCloseUnitOption(e)
    })
    return () => {
      window.removeEventListener('click', (e) => {
        handleCloseUnitOption(e)
      })
    }
  }, [handleCloseUnitOption])

  return {
    openUnitOption,
    unitOptionRef,
    handleToggleUnitOption,
  }
}
