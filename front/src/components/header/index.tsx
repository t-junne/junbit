import styled from "styled-components"
import Logo from '../../assets/images/logo.png'
import SearchInput from "../input/SearchInput"
import icProfile from '../../assets/icons/profile.svg'
import icBurgerSimple from '../../assets/icons/burger-simple.svg'
import theme from "../../style/theme"

const Header = () => {
  return (
    <Wrapper>
      <LogoArea>
        <img src={Logo} alt='로고 이미지' />
      </LogoArea>
      <SearchArea>
        <SearchInput onClick={() => {}} />
      </SearchArea>
      <ProfileArea>
        <ProfileWrapper>
          <img src={icBurgerSimple} alt='메뉴 아이콘' />
          <img src={icProfile} alt='프로필 아이콘' />
        </ProfileWrapper>
      </ProfileArea>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  height: 8rem;
  position: relative;
  z-index: 100;
  padding: 0 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${theme.colors.grey30};
`
const LogoArea = styled.div`
  flex: 1 0 14rem;
  img {
    width: 14rem;
    height: 100%;
  }
`
const SearchArea = styled.div`
  flex: 0 1 auto;
  min-width: 36rem;
`
const ProfileArea = styled.div`
  flex: 1 0 14rem;
  display: flex;
  justify-content: flex-end;
`
const ProfileWrapper = styled.div`
  width: 10rem;
  height: 5rem;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid ${theme.colors.grey30};
  box-shadow: 0.2rem 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 2.4rem;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
  }
`