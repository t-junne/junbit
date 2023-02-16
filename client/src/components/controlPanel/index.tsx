import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import theme from '../../style/theme'
import Calendar from 'react-calendar';
import icArrowLeft from '../../assets/icons/arrow-left.svg'
import icArrowRight from '../../assets/icons/arrow-right.svg'
import { timeOptions } from '../../infra/controlPanel/options';
import { unitOptions } from '../../infra/controlPanel/options';
import moment from 'moment';
import 'moment/locale/ko';


const ControlPanel = () => {
  const [openPanel, setOpenPanel] = useState(true)
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openTimeOption, setOpenTimeOption] = useState(false);
  const [openUnitOption, setOpenUnitOption] = useState(false);
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState({ value: date.getHours(), displayText: `${moment(date.getHours(), 'HH').format('a hh')}시` })
  const [unit, setUnit] = useState({ value: 1, displayText: '1시간' })
  const [wide, setWide] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const timeOptionRef = useRef<HTMLDivElement>(null)
  const unitOptionRef = useRef<HTMLDivElement>(null)

  const handleSelectDay = (e: Date) => {
    setDate(e)
    setOpenCalendar(false)
  }

  const handleCloseCalendar = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement

    if (openCalendar && !calendarRef.current?.contains(target)) {
      setOpenCalendar(false)
    }
  }, [openCalendar])

  const handleCloseTimeOption = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement

    if (openTimeOption && !timeOptionRef.current?.contains(target)) {
      setOpenTimeOption(false)
    }
  }, [openTimeOption])

  const handleCloseUnitOption = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement

    if (openUnitOption && !unitOptionRef.current?.contains(target)) {
      setOpenUnitOption(false)
    }
  }, [openUnitOption])
  
  useEffect(() => {
    window.addEventListener('click', (e) => {
      handleCloseCalendar(e)
      handleCloseTimeOption(e)
      handleCloseUnitOption(e)
    });
    return () => {
      window.removeEventListener('click', (e) => {
        handleCloseCalendar(e)
        handleCloseTimeOption(e)
        handleCloseUnitOption(e)
      })
    }
  }, [handleCloseCalendar, handleCloseTimeOption])


  return (
    <Wrapper isOpen={openPanel}>
      <OpenCloseButton
        onClick={() => {
          setOpenCalendar(false)
          setOpenPanel(!openPanel)
        }}
      >
        <img
          src={openPanel ? icArrowLeft : icArrowRight}
          alt={openPanel ? '닫기' : '열기'}
        />
      </OpenCloseButton>
      <ControllerWrapper isOpen={openPanel}>
        <RadioInputWrapper>
          <span className='control-panel__title'>거래량 선택</span>
          <div className='control-panel__radio-wrapper'>
            <RadioInputLabel htmlFor='trade-volume'>
              <input
                id='trade-volume'
                type='radio'
              />
              <span className='radio-selector'><div></div></span>
              <span className='radio-text'>
                거래량(수량)
              </span>
            </RadioInputLabel>
            <RadioInputLabel htmlFor='trade-price'>
              <input
                id='trade-price'
                type='radio'
              />
              <span className='radio-selector'><div></div></span>
              <span className='radio-text'>
                거래량(금액)
              </span>
            </RadioInputLabel>
          </div>
        </RadioInputWrapper>
        <DateTimeWrapper>
          <span className='control-panel__title'>날짜 및 시간</span>
          <Datetime>
            <DateWrapper>
              <span>
                {`${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`}
                </span>
              <OpenCalendarButton
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenCalendar(true)
                }}
              >
                <span>달력 열기</span>
                <img className='ic-arrow' src={icArrowRight} alt='달력 열기' />
              </OpenCalendarButton>
              {openCalendar &&
                <CalendarWrapper
                  ref={calendarRef}
                >
                  <Calendar
                    calendarType='US'
                    onChange={(e: Date) => handleSelectDay(e)}
                    defaultValue={date}
                    minDetail={'month'}
                    showFixedNumberOfWeeks={false}
                    showNeighboringMonth={false}
                    prevLabel={<img src={icArrowLeft} alt='이전으로' />}
                    nextLabel={<img src={icArrowRight} alt='다음으로' />}
                    showDoubleView={wide ? true : false}
                  />
                <CalendarButtonWrapper>
                  <SetWideButton
                    onClick={() => setWide(!wide)}
                  >
                    {wide ? '축소하기' : '확대하기'}
                  </SetWideButton>
                  <CloseButton
                    ref={closeButtonRef}
                    onClick={() => setOpenCalendar(false)}
                  >
                    닫기
                  </CloseButton>
                </CalendarButtonWrapper>
                </CalendarWrapper>
              }
            </DateWrapper>
            <TimeWrapper
              isOpen={openTimeOption}
              ref={timeOptionRef}
              onClick={() => setOpenTimeOption(!openTimeOption)}
            >
              <div className='control-panel__option-wrapper'>
                <span className='control-panel__option-text'>{time.displayText}</span>
                <img className='ic-arrow control-panel__datetime__time-option' src={icArrowLeft} alt='더 보기' />
              </div>
              {openTimeOption && 
                <ul className='control-panel__option-ul'>
                  {timeOptions.map((value, index) => (
                    <li
                      key={index}
                      className='control-panel__option-li'
                      onClick={() => setTime((prev: any) => {
                        return {
                          ...prev,
                          value: index,
                          displayText: value.displayText
                        }
                      })}
                    >
                      <span>{value.displayText}</span>
                    </li>
                  ))}
                </ul>
              }
            </TimeWrapper>
          </Datetime>
        </DateTimeWrapper>
        <UnitWrapper>
          <span className='control-panel__title'>단위시간 선택</span>
          <UnitOptionWrapper
            isOpen={openUnitOption}
            ref={unitOptionRef}
            onClick={() => setOpenUnitOption(!openUnitOption)}
          >
            <div className='control-panel__option-wrapper'>
              <span className='control-panel__option-text'>{unit.displayText}</span>
              <img className='ic-arrow control-panel__unit-option' src={icArrowLeft} alt='더 보기' />
            </div>
            {openUnitOption && 
              <ul className='control-panel__option-ul'>
                {unitOptions.map((value, index) => (
                  <li
                    key={index}
                    className='control-panel__option-li'
                    onClick={() => setUnit((prev: any) => {
                      return {
                        ...prev,
                        value: index,
                        displayText: value.displayText
                      }
                    })}
                  >
                    <span>{value.displayText}</span>
                  </li>
                ))}
              </ul>
            }
          </UnitOptionWrapper>
        </UnitWrapper>
      </ControllerWrapper>
    </Wrapper>
  )
}

export default ControlPanel

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: ${(props) => (props.isOpen ? '360px' : 0)};
  height: 100%;
  background: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: width 0.3s ease;
`
const OpenCloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: -50px;
  width: 50px;
  height: 50px;
  padding: 12px;
  border: 1px solid ${theme.colors.grey40};
  border-radius: 0 12px 12px 0;

  img {
    width: 100%;
    height: 100%;
  }
`
const ControllerWrapper = styled.div<{ isOpen: boolean }>`
  padding: 0 30px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;

  .ic-arrow {
    width: 16px;
    height: 16px;
  }
  .control-panel__title {
    font-size: 16px;
    font-weight: bold;
  }
  .control-panel__option-wrapper {
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .control-panel__option-text {
    font-size: 14px;
  }
  .control-panel__option-ul {
    width: 100%;
    height: 210px;
    position: absolute;
    top: 50px;
    z-index: 10;
    background: white;
    border-radius: 0 0 8px 8px;
    overflow-y: scroll;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.red};
      border-radius: 12px;
    }
  }
  .control-panel__option-li {
    height: 42px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.grey20};
    cursor: pointer;

    :hover {
      background: ${theme.colors.grey10};
    }

    span {
      width: 100%;
      font-size: 14px;
    }
  }
`
const RadioInputWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};

  .control-panel__radio-wrapper {
    display: flex;
    justify-content: space-between;
  }
`
const RadioInputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    overflow: hidden;
    position: absolute;
  }

  .radio-text {
    position: relative;
    font-size: 16px;
  }

  .radio-selector {
    min-width: 24px;
    min-height: 24px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    background: ${theme.colors.red};

    div {
      width: 12px;
      height: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: white;
    }
  }
`
const DateTimeWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};
`
const Datetime = styled.div`
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

  .control-panel__datetime__time-option {
    transform: ${props => props.isOpen  ? 'rotate(90deg)' : 'rotate(-90deg)'};
  }
`
const UnitWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};
`
const UnitOptionWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 50px;
  border: 1px solid ${theme.colors.grey30};
  border-radius: 12px;
  position: relative;

  .control-panel__unit-option {
    transform: ${props => props.isOpen  ? 'rotate(90deg)' : 'rotate(-90deg)'};
  }
`