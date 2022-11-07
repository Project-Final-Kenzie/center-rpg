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
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: auto;
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
  margin-right: 30px;

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

export const StyledSlide = styled.section`
  height: 220px;
  width: 66vw;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const History = styled.li`
  background: linear-gradient(180deg, #ffcf40 0%, #ffffff 100%);
  box-shadow: 0px 10px 64px rgb(0 0 0 / 30%);
  height: 445.24237060546875px;
  width: 249px;

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  margin-left: 10px;
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
    width: 236px;
    height: 159px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #646464;
  }

  div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #000000;

    padding: 7px;
  }

  button {
    width: 211px;
    height: 30px;
    bottom: 310px;

    background: #ac2900;
    border-radius: 15px;
  }
`;
