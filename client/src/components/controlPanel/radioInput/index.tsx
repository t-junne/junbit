import styled from 'styled-components'
import theme from '../../../style/theme'

interface RadioInputProps {
  radioOption: RadioOptionType
  setRadioOption: React.Dispatch<React.SetStateAction<RadioOptionType>>
}

export default function RadioInput({
  radioOption,
  setRadioOption,
}: RadioInputProps) {
  return (
    <Wrapper>
      <span className="control-panel__title">거래량 선택</span>
      <div className="control-panel__radio-wrapper">
        <Label
          htmlFor="trade-volume"
          checked={radioOption === 'VOLUME'}
          onClick={() => setRadioOption('VOLUME')}
        >
          <input id="trade-volume" type="radio" value="VOLUME" />
          <span className="radio-selector">
            <div></div>
          </span>
          <span className="radio-text">거래량(수량)</span>
        </Label>
        <Label
          htmlFor="trade-price"
          checked={radioOption === 'PRICE'}
          onClick={() => setRadioOption('PRICE')}
        >
          <input id="trade-price" type="radio" value="PRICE" />
          <span className="radio-selector">
            <div></div>
          </span>
          <span className="radio-text">거래량(금액)</span>
        </Label>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
const Label = styled.label<{ checked: boolean }>`
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
    border: ${(props) =>
      props.checked ? null : `0.5px solid ${theme.colors.grey30}`};
    border-radius: 50%;
    background: ${(props) => (props.checked ? theme.colors.red : 'white')};
    cursor: pointer;

    div {
      width: 12px;
      height: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: ${(props) => (props.checked ? 'white' : null)};
    }
  }
`
