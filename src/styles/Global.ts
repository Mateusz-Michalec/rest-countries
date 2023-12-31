import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding:0;
    margin: 0;
}
body {
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }) => theme.background};
    color:${({ theme }) => theme.textColor} 
}
button {
  cursor: pointer;
  border: none;
}
a {
  text-decoration:none;
  color: unset;
}
`;

export const Main = styled.main`
  padding: 45px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 500px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 992px) {
    max-width: 700px;
  }

  @media (min-width: 1200px) {
    max-width: 800px;
  }
`;

export default GlobalStyle;
