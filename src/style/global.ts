import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}

input{
    background: transparent;
    border:none;
    &:focus{
        outline:none
    }
}
select{
    background: transparent;
    border:none;
}
html,body{
  overflow-x: hidden;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

@media (max-width: 780px) {
  html {
    font-size: 70%;
  }
}
`;

export default GlobalStyle;
