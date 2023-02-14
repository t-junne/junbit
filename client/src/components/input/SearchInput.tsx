import styled from "styled-components"
import icSearchWhite from '../../assets/icons/search-white.svg';
import theme from "../../style/theme";

interface SearchInputProps {
  onClick: () => void
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <Wrapper>
      <input type='text' />
      <button onClick={props.onClick}>
        <img src={icSearchWhite} alt='검색 아이콘' />
      </button>
    </Wrapper>
  )
}

export default SearchInput

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0.8rem;
  height: 5rem;
  border-radius: 2.4rem;
  border: 0.1rem solid ${theme.colors.grey30};
  box-shadow: 0.2rem 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
  
  input {
    width: 85%;
    height: 100%;
    padding: 0 1.2rem;
    color: ${theme.colors.grey90};
    border: none;
    font-size: 1.8rem;

    &:active {
      border: none;
    }

    &:focus {
     outline: none;
    }
  }

  button {
    width: 3.6rem;
    height: 3.6rem;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0.6rem;
    right: 0.6rem;
    background: ${theme.colors.red};
    &:active {
      background: ${theme.colors.red};
    }
  }
  img {
    width: 2.2rem;
    height: 2.2rem;
  }


`