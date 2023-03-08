import styled from 'styled-components'
import MainTable from '../../components/table'
import ControlPanel from '../../components/controlPanel'
import useFetchData from './useFetchData'
import theme from '../../style/theme'
const MainPage = () => {
  const {
    option,
    data,
    isLoading,
  } = useFetchData()
  return (
    <Wrapper>
      <ControlPanel />
      <TableWrapper>
        <MainTable
          option={option}
          data={data}
        />
      </TableWrapper>
    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${theme.colors.grey10};
`
const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`