import styled from "styled-components";
import background from "../../assets/img/backgrondhome.png";
import { Link } from "react-router-dom";

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  min-height: 100vh;

  ul {
    display: flex;

    @media (min-width: 1440px) {
      overflow-x: hidden;
      justify-content: center;
    }

    overflow-x: scroll;
    justify-content: flex-start;

    flex-wrap: wrap;
    align-items: center;

    gap: 2rem;

    width: 90vw;
    height: 55vh;
    flex-wrap: nowrap;

    margin-bottom: 20px;
  }
`;

export const LinkStyled = styled(Link)`
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
`;

export const LinkStyledRedirect = styled(Link)`
  width: 80%;
  height: 35px;
  background: ${({ theme }) => theme.colors.yellow.secondary};
  border-radius: 15px;
  font-weight: 700;
  font-size: 15px;

  color: #717171;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const History = styled.li`
  background: ${({ theme }) => theme.colors.rgb.primary};
  box-shadow: none;

  border-radius: 30px;
  padding: 1rem;

  min-width: 300px;
  height: 445.24237060546875px;

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 150px;
    height: 150px;
    background: ${({ theme }) => theme.colors.white.primary};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
    border-radius: 100%;
  }
  div::-webkit-scrollbar {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    height: 150px;
    background: ${({ theme }) => theme.colors.gray.setiary};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
    border-radius: 8px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    text-align: center;

    color: ${({ theme }) => theme.colors.yellow.tertiary};
  }

  div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white.primary};

    padding: 0.5rem;
  }

  button {
    width: 80%;
    height: 35px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 15px;
    background: ${({ theme }) => theme.colors.yellow.secondary};
    color: ${({ theme }) => theme.colors.gray.sextiary};
  }
  @media (min-width: 768px) {
  }
`;
