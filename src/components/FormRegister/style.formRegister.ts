import styled from "styled-components";
import {Link} from "react-router-dom";

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    padding: 0 30px 0 30px;

    h1{
        font-size: 35px;
        font-weight: 500;
        line-height: 24px;
        color: ${({theme}) => theme.colors.white.primary};
        text-align: center;
        margin-top: 30px;
        
    }

    p{

        font-size: 16px;
        font-weight: 200;
        line-height: 24px;
        color: ${({theme}) => theme.colors.white.secondary};
        text-align: center;
        margin-top: 20px;


    }

    label{

        font-size: 14px;
        color: ${({theme}) => theme.colors.white.primary};
        font-weight: 200;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    select{
        width: 100%;
        height: 40px;
        padding: 0 10px 0 10px;
        border-radius: 8px;
        background-color: ${({theme}) => theme.colors.white.tertiary};
    }
`

export const SideOne = styled.div`

    background-color: ${({theme}) => theme.colors.yellow.primary};
    width: 500px;
    height: 650px;
    border-radius: 8px 0 0 8px;

    img{

        width: 400px;
        display: flex;
        align-items: center;
        margin: 60px auto 0 auto;
    }

    h2{

        font-size: 55px;
        font-weight:500;
        color: ${({theme}) => theme.colors.white.primary};
        text-align: center;
        margin-top: 45px;
        
    }
    

`

export const SideTwo = styled.div`
    background-color: ${({theme}) => theme.colors.gray.primary};
    width: 500px;
    height: 650px;
    border-radius: 0 8px 8px 0;
`

export const Image = styled.img`

    width: 50px;

`

export const Div = styled.div`

    margin-top: 25px;
    display: flex;
    justify-content: space-between;

`

export const LinkStyled = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 70px;
    height: 30px;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.gray.secondary};
    font-weight: 200;
    background-color: ${({theme}) => theme.colors.gray.tertiary};

`
