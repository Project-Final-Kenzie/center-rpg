import styled from 'styled-components';
import { Link } from "react-router-dom";
import background from '../../assets/img/imagem-5.jpg'


export const DivBody = styled.body`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    -webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;

`

export const DivMain = styled.main`

    width: 80%;
    height: 85%;
    background-color: ${({ theme }) => theme.colors.rgb.quartiary};
    border-radius: 80px 8px 80px 8px;
    margin: 50px auto;
    padding: 20px;
    
`

export const DivContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 25px;

`

export const SideOne = styled.div`
   
   width: 45%;

`

export const SideTwo = styled.div`
    width: 45%;
`

export const LinkStyledButton = styled(Link)`

  width: 98px;
  height: 37px;
  background: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray.quartiary};
  text-decoration: none;

`

export const LinkStyled = styled.a`

    font-size: 16px;
    color: ${({ theme }) => theme.colors.yellow.secondary};

`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 25px;
        color: ${({ theme }) => theme.colors.white.primary};
    }

    h3{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.yellow.secondary};
    }
`

export const DivMaster = styled.div`

    border: 1px solid ${({ theme }) => theme.colors.white.primary};
    
    display: flex;
    border-radius: 80px 8px 80px 8px;
    padding: 10px;
    gap: 10px;
    margin-top: 20px;

    .sideOne{
        
        background-color: white;
        border-radius: 80px 8px 80px 8px;
        img{
            width: 150px;
            height: 150px;
            border-radius: 80px 8px 80px 8px;
        }
        
    }

    .sideTwo{

        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 45px;

        h1{
            font-size: 18px;
            color: ${({ theme }) => theme.colors.white.primary};
        }

        p{
            font-size: 16px;
            color: ${({ theme }) => theme.colors.white.primary};
            font-weight: 200;
        }
    }
    

`

export const DivData = styled.div`

 display: flex;
 flex-direction: column;
 gap: 10px;
 margin-top: 20px;

.dataStyle{

    display: flex;
    gap: 5px;

    h1{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.white.primary};
    }

    p{

        font-size: 16px;
        color: ${({ theme }) => theme.colors.yellow.secondary};

    }

}

.dataStyleTwo{

    display: flex;
    gap: 5px;

    h1{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.white.primary};
    }

}

`

export const DivButton = styled.div`

    margin-top: 30px;
    margin-left: 30%;

    button{
        background-color: ${({ theme }) => theme.colors.yellow.quartiary};
        width: 250px;
        height: 45px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.gray.secondary};
    }

`

export const DivUsers = styled.div`

    .DivTitleUser{
        
            font-size: 12px;
            color: ${({ theme }) => theme.colors.white.primary};
            margin-left: 28%;
            margin-top: 10px;
    }


    .container{

        border: 1px solid ${({ theme }) => theme.colors.white.primary};
        height: 230px;
        display: flex;
        flex-direction: column;
        border-radius: 80px 8px 80px 8px;
        padding: 10px;
        gap: 10px;
        margin-top: 10px;
        
        ul{
            background-color: ${({ theme }) => theme.colors.gray.primary};
            width: 400px;
            padding: 15px;
            border-radius: 8px;
            margin: 0 auto;
        }
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        p{

            font-size: 12px;
            color: ${({ theme }) => theme.colors.white.primary};
            margin-left: 10px;
            margin-bottom: 5px;

        }

        button{
            background-color: ${({ theme }) => theme.colors.gray.tertiary};
            width: 25px;
            height: 25px;
            margin-bottom: 20px;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.gray.primary};
        }
    }



`

export const DivHistory = styled.div`

    h1{
        font-size: 35px;
        color: ${({ theme }) => theme.colors.white.primary};
        width: 100%;
        text-align: center;
        
    }

    
    p{
        background-color: ${({ theme }) => theme.colors.white.primary};
        height: 70vh;
        border-radius: 80px 8px 80px 8px;
        font-size: 14px;
        padding: 50px;
        
    }
   



`