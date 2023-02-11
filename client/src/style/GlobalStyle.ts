import { createGlobalStyle } from "styled-components";
import NotoSansKRRegular from '../fonts/NotoSansKR-Regular.otf';
import NotoSansKRBold from '../fonts/NotoSansKR-Bold.otf';
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url(${NotoSansKRRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url(${NotoSansKRBold});
    font-weigiht: 500;
    font-style: normal;
  }

  ${reset}

  * {
    box-sizing:border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 10px;
    margin:0;
    padding:0;
  }

  body {
    margin: 0;
    padding: 0;

    #App { 
        width:100vw;
        height:calc(var(--vh, 1vh) * 100);
    }
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle