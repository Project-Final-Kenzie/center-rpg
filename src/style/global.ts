import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
*{
        margin:0;
        padding:0;
        box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
img{
    max-width: 100%;
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
body{

    background-color: gray;
    
}

`;

export default GlobalStyle;
