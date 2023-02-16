import styled from 'styled-components'
import MainTable from '../../components/table'
import ControlPanel from '../../components/controlPanel'

const MainPage = () => {
  return (
    <Wrapper>
      <ControlPanel />
      <MainTable />
    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
