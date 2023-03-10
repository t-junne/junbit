import styled from 'styled-components'
import theme from '../../../style/theme'
import Calendar from 'react-calendar'
import icArrowLeft from '../../../assets/icons/arrow-left.svg'
import icArrowRight from '../../../assets/icons/arrow-right.svg'
import useDatetime from './useDatetime'
import { timeOptions } from '../../../infra/controlPanel/options'

type TimeType = { value: number; displayText: string }

interface DatetimeProps {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  time: TimeType
  setTime: React.Dispatch<React.SetStateAction<TimeType>>
}

export default function Datetime({
  date,
  setDate,
  time,
  setTime,
}: DatetimeProps) {
  const {
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
  } = useDatetime()

  return (
    <Wrapper>
      <span className="control-panel__title">날짜 및 시각</span>
      <DatetimeWrapper>
        <DateWrapper onClick={handleOpenCalendar}>
          <span>
            {`${date.getFullYear()}. ${
              date.getMonth() + 1
            }. ${date.getDate()}.`}
          </span>
          <OpenCalendarButton>
            <span>달력 열기</span>
            <img className="ic-arrow" src={icArrowRight} alt="달력 열기" />
          </OpenCalendarButton>
          {openCalendar && (
            <CalendarWrapper ref={calendarRef}>
              <Calendar
                calendarType="US"
                onChange={(e: Date) => {
                  setDate(e)
                  setOpenCalendar(false)
                }}
                defaultValue={date}
                minDetail={'month'}
                showFixedNumberOfWeeks={false}
                showNeighboringMonth={false}
                prevLabel={<img src={icArrowLeft} alt="이전으로" />}
                nextLabel={<img src={icArrowRight} alt="다음으로" />}
                showDoubleView={wide ? true : false}
              />
              <CalendarButtonWrapper>
                <SetWideButton onClick={() => setWide(!wide)}>
                  {wide ? '축소하기' : '확대하기'}
                </SetWideButton>
                <CloseButton
                  ref={closeButtonRef}
                  onClick={handleClickCloseCalendar}
                >
                  닫기
                </CloseButton>
              </CalendarButtonWrapper>
            </CalendarWrapper>
          )}
        </DateWrapper>
        <TimeWrapper
          isOpen={openTimeOption}
          ref={timeOptionRef}
          onClick={handleToggleTimeOption}
        >
          <div className="control-panel__option-wrapper">
            <span className="control-panel__option-text">
              {time.displayText}
            </span>
            <img
              className="ic-arrow control-panel__datetime__time-option"
              src={icArrowLeft}
              alt="더 보기"
            />
          </div>
          {openTimeOption && (
            <ul className="control-panel__option-ul">
              {timeOptions.map((value, index) => (
                <li
                  key={index}
                  className="control-panel__option-li"
                  onClick={() =>
                    setTime((prev: any) => {
                      return {
                        ...prev,
                        value: index,
                        displayText: value.displayText,
                      }
                    })
                  }
                >
                  <span>{value.displayText}</span>
                </li>
              ))}
            </ul>
          )}
        </TimeWrapper>
      </DatetimeWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};
`
const DatetimeWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  border: 1px solid ${theme.colors.grey30};
  border-radius: 12px;
`
const DateWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.grey30};
  cursor: pointer;

  span {
    font-size: 16px;
  }
`
const OpenCalendarButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 14px;
  }
`
const CalendarWrapper = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  cursor: default;
`
const CalendarButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`
const SetWideButton = styled.button`
  color: ${theme.colors.grey90};
  font-weight: bold;
  font-size: 14px;
  border: none;
  background: none;
  text-decoration: underline;
`
const CloseButton = styled.button`
  width: 60px;
  height: 34px;
  color: white;
  background: ${theme.colors.grey90};
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  flex-shrink: 0;
  justify-self: flex-end;
`
const TimeWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 50%;
  position: relative;
  cursor: pointer;
  .control-panel__datetime__time-option {
    transform: ${(props) =>
      props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
  }
`
