import styled from "styled-components";
import background from "../../assets/img/background_home.svg";
import { Link } from "react-router-dom";

export const StyledContainer = styled.main`
  background-image: url(${background});
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  min-height: 86.5vh;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 60%;
    margin: 0 auto;
    padding: 5px;
    flex-wrap: wrap;
    padding-bottom: 25px;
  }
`;

export const LinkStyled = styled(Link)`
  width: 98px;
  height: 37px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
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

  color: #454545;
  text-decoration: none;
`;

export const LinkStyledRedirect = styled(Link)`
  width: 211px;
  height: 35px;
  background: #f2ef33;
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
  background: rgba(156, 156, 153, 0.3);

  box-shadow: 0px 10px 64px rgba(0, 0, 0, 0.3);
  border-radius: 30px;

  height: 445.24237060546875px;
  width: 249px;

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 1rem;

  img {
    max-width: 150px;
    max-height: 150px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100%;
    margin: 5px;
  }
  div {
    width: 229px;
    height: 159px;
    background: #89898929;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 8px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #fff500;
  }

  div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #ffffff;

    padding: 7px;
  }

  button {
    width: 211px;
    height: 35px;
    background: #f2ef33;
    border-radius: 15px;
    font-weight: 700;
    font-size: 15px;
    color: #717171;
  }
`;
