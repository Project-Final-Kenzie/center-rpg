import styled from "styled-components";
import background from "../../assets/img/background_home.svg";

export const StyledContainer = styled.main`
  background-image: url(${background});
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  min-height: 86.5vh;

  ul {
    display: flex;
    width: 60%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 25px;
  }
`;

export const Logout = styled.button`
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

export const CreateCamp = styled.button`
  width: 250px;
  height: 50px;
  background: #fff500;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  display: flex;
  margin: 29px auto;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  color: #717171;
`;

export const History = styled.li`
  background: rgba(156, 156, 153, 0.3);

  box-shadow: 0px 10px 64px rgba(0, 0, 0, 0.3);
  border-radius: 30px;

  height: 445.24237060546875px;
  width: 300px;

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
    width: 280px;
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
