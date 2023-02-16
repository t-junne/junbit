import styled from 'styled-components'

const MainTable = () => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>순위</th>
            <th>코인명</th>
            <th>누적 거래량</th>
            <th>전 기간대비</th>
            <th>전일 동 시간 대비</th>
            <th>등락</th>
          </tr>
        </thead>
      </Table>
    </Wrapper>
  )
}

export default MainTable

const Wrapper = styled.div``
const Table = styled.table``
