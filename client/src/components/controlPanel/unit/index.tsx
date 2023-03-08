import styled from 'styled-components'
import theme from '../../../style/theme'
import icArrowLeft from '../../../assets/icons/arrow-left.svg'
import useUnit from './useUnit'
import { unitOptions } from '../../../infra/controlPanel/options'

type UnitType = { value: number; displayText: string }

interface UnitProps {
  unit: UnitType
  setUnit: React.Dispatch<React.SetStateAction<UnitType>>
}

export default function Unit({ unit, setUnit }: UnitProps) {
  const { openUnitOption, unitOptionRef, handleToggleUnitOption } = useUnit()

  return (
    <Wrapper>
      <span className="control-panel__title">단위시간 선택</span>
      <UnitOptionWrapper
        isOpen={openUnitOption}
        ref={unitOptionRef}
        onClick={handleToggleUnitOption}
      >
        <div className="control-panel__option-wrapper">
          <span className="control-panel__option-text">{unit.displayText}</span>
          <img
            className="ic-arrow control-panel__unit-option"
            src={icArrowLeft}
            alt="더 보기"
          />
        </div>
        {openUnitOption && (
          <ul className="control-panel__option-ul">
            {unitOptions.map((value, index) => (
              <li
                key={index}
                className="control-panel__option-li"
                onClick={() =>
                  setUnit((prev: any) => {
                    return {
                      ...prev,
                      value: value.value,
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
      </UnitOptionWrapper>
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
const UnitOptionWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 50px;
  border: 1px solid ${theme.colors.grey30};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  .control-panel__unit-option {
    transform: ${(props) =>
      props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
  }
`
