import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MainTable from '../../components/table'
import ControlPanel from '../../components/controlPanel'
import useFetchData from './useFetchData'
import theme from '../../style/theme'

const MainPage = () => {
  const [width, setWidth] = useState<number | undefined>(0)
  const tableWrapperRef = useRef<HTMLDivElement>(null)
  const { datetime, unit, option, resetDatetime, data, isLoading, prevTermData, isPrevTermDataLoading } = useFetchData() 



  const setOffsetWidth = () => {
    setWidth(tableWrapperRef.current?.offsetWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      setOffsetWidth()
    })
    return () => {
      window.removeEventListener('resize', () => {
        setOffsetWidth()
      })
    }
  })
  return (
    <Wrapper>
      <ControlPanel />
      <TableWrapper
        className='wrapper-table'
        ref={tableWrapperRef}
      >
        <div className='wrapper-inner'>
          <TableLabel>
            <span>
              {`${new Date(datetime).toLocaleString()}: ${unit.value}시간 단위`}
            </span>
          </TableLabel>
          <MainTable option={option} data={data} />
        </div>
        
        {(typeof width === 'number' && width > 1200) &&
          <div className='wrapper-inner'>
            <TableLabel>
              <span>
                {`${new Date(resetDatetime(datetime, 1)).toLocaleString()}: ${unit.value}시간 단위`}
              </span>
            </TableLabel>
            <MainTable option={option} data={prevTermData} />
          </div>
        }
      </TableWrapper>
    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  background-color: ${theme.colors.grey10};

  .wrapper-inner {
    width: 100%;
  }  
`
const TableWrapper = styled.div`
  width: 100%;
  height: calc(100% - 36px);
  padding: 20px;
  display: flex;
  gap: 20px;
`
const TableLabel = styled.div`
  padding-bottom: 20px;
  text-align: end;
  span {
    font-weight: bold;
  }
`
