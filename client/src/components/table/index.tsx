import styled from 'styled-components'
import theme from '../../style/theme'
import { tokenData } from '../../infra/token'

interface MainTableProps {
  option: RadioOptionType
  data: TradeVolumeRankDto[] | undefined
}

export default function MainTable({ option, data }: MainTableProps) {
  if (option === 'VOLUME') {
    return (
      <Wrapper>
        <Table className='table-head'>
          <colgroup>
            <col width='9%' />
            <col width='23%' />
            <col width='15%' />
            <col width='16%' />
            <col width='20%' />
            <col width='17%' />
          </colgroup>
          <thead className="table__thead">
            <tr>
              <th className="table__thead__rank">순위</th>
              <th className="table__thead__name">코인명</th>
              <th className="table__thead__prev-diff">전기 대비</th>
              <th>전일 동기 대비</th>
              <th>
                변화량
                <br />
                (전기 대비)
              </th>
              <th className="table__thead__volume-diff-rate">
                변화율
                <br />
                (전기 대비)
              </th>
            </tr>
          </thead>
        </Table>
        <TBodyWrapper>
          <Table className='table-body'>
          <colgroup>
              <col width='8%' />
              <col width='25%' />
              <col width='15%' />
              <col width='15%' />
              <col width='20%' />
              <col width='17%' />
            </colgroup>
            <tbody className="table__tbody">
              {data &&
                data.map((value, index) => {
                  const prevDiff =
                    value.prevDiffRateRank === null
                      ? 'N/A'
                      : value.diffRateRank - value.prevDiffRateRank
                  const prevDayDiff =
                    value.prevDayDiffRateRank === null
                      ? 'N/A'
                      : value.diffRateRank - value.prevDayDiffRateRank
                  const prevDiffUp = typeof prevDiff === 'number' && prevDiff < 0
                  const prevDayDiffUp =
                    typeof prevDayDiff === 'number' && prevDayDiff < 0
                  return (
                    <tr key={index}>
                      <td>
                        <span>{value.diffRateRank}</span>
                      </td>
                      <td>
                        <span className='table__tbody__td table__tbody__token-name'>
                          {tokenData[value.market as keyof TokenData].kr_name}
                        </span>
                      </td>
                      <td>
                        <UpDownIndicator
                          up={prevDiffUp}
                          unChanged={prevDiff === 0}
                        >
                          {prevDiff === 'N/A' || prevDiff === 0
                            ? ''
                            : prevDiffUp
                            ? '▲'
                            : '▼'}
                        </UpDownIndicator>
                        {prevDiff === 0
                          ? '-'
                          : typeof prevDiff === 'number'
                          ? Math.abs(prevDiff)
                          : 'N/A'}
                      </td>
                      <td>
                        <UpDownIndicator
                          up={prevDayDiffUp}
                          unChanged={prevDayDiff === 0}
                        >
                          {prevDayDiff === 'N/A' || prevDayDiff === 0
                            ? ''
                            : prevDayDiffUp
                            ? '▲'
                            : '▼'}
                        </UpDownIndicator>
                        {prevDayDiff === 0
                          ? '-'
                          : typeof prevDayDiff === 'number'
                          ? Math.abs(prevDayDiff)
                          : 'N/A'}
                      </td>
                      <td>
                        <span>{Math.round(value.volumeDiff * 100) / 100}</span>
                      </td>
                      <td>
                        <span>
                          {(
                            (Math.round(value.volumeDiffRate * 10000) / 10000) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </TBodyWrapper>
      </Wrapper>
    )
  } else {
    return null
  }
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

`
const TBodyWrapper = styled.div`
  height: calc(100% - 62.5px);
  overflow-y: auto;
  ${theme.options.scrollBar};
`

const Table = styled.table`
  width: 100%;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

  tr {
    height: 40px;
    border-bottom: 1px solid ${theme.colors.grey20};
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    word-break: break-all;
  }
  .table__thead {
    tr {
      border-radius: 18px;
      color: white;
    }
    th {
      background-color: ${theme.colors.grey90};
      font-weight: bold;
    }
    .table__thead__rank {
      width: 60px;
      border-radius: 18px 0 0 0;
    }
    .table__thead__volume-diff-rate {
      width: 70px;
      border-radius: 0 18px 0 0;
    }
    .table__thead__prev-diff {
      width: 90px;
    }
  }

  .table__tbody {
    background-color: white;

    .table__tbody__token-name {
      &:hover {
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
`
const UpDownIndicator = styled.span<{ up: boolean; unChanged: boolean }>`
  color: ${(props) =>
    !props.unChanged && (props.up ? theme.colors.red : theme.colors.blue)};
`
