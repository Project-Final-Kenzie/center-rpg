import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 30px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.white.primary};
    text-align: center;
    margin-top: 40px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.white.secondary};
    text-align: center;
    margin-top: 20px;
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white.primary};
    font-weight: 200;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .messageBox {
    display: flex;
    align-items: center;
    margin: 20px auto;
    font-size: 12px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white.primary};
    text-align: center;
    gap: 5px;
  }
`;

export const SideOne = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow.primary};
  width: 500px;
  height: 550px;
  border-radius: 8px 0 0 8px;

  img {
    width: 350px;
    display: flex;
    align-items: center;
    margin: 60px auto 0 auto;
  }

  h2 {
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white.primary};
    text-align: center;
    margin-top: 45px;
  }
`;

export const SideTwo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.primary};
  width: 500px;
  height: 550px;
  border-radius: 0 8px 8px 0;
`;

export const LinkStyled = styled(Link)`
  display: block;
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white.primary};
  text-decoration: none;
`;
export const ErrorMessage = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.quintiary};
  margin: 3px 0px;
`;
export const InputDiv = styled.div`
  height: 85px;
`;
