import styled from "styled-components";
import background from "../../assets/img/backgrondhome.png";

export const StyledContainer = styled.main`
  background-image: url(${background});
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;

  display: flex;
  min-height: 95vh;
  flex-direction: column;
  div {
    padding-top: 30px;
  }
  ul {
    display: flex;
    gap: 2rem;
    padding-bottom: 25px;

    display: flex;
    justify-content: flex-start;

    align-items: center;
    overflow-x: scroll;
    flex-wrap: nowrap;
    padding: 26px;

    @media (min-width: 769px) {
      flex-wrap: wrap;
      align-items: center;
      overflow-x: hidden;
      justify-content: center;
    }
  }
`;

export const Logout = styled.button`
  width: 98px;
  height: 37px;
  background: ${({ theme }) => theme.colors.white.primary};
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

  color: ${({ theme }) => theme.colors.gray.quartiary};
  text-decoration: none;
`;

export const StyledSlide = styled.section`
  height: 220px;
  width: 66vw;
  background: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const CreateCamp = styled.button`
  width: 250px;
  height: 50px;
  background: ${({ theme }) => theme.colors.yellow.tertiary};
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  display: flex;
  margin: 29px auto;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray.sextiary};
`;

export const History = styled.li`
  background: ${({ theme }) => theme.colors.rgb.primary};

  box-shadow: 0px 10px 64px ${({ theme }) => theme.colors.rgb.secondary};
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
    width: 150px;
    height: 150px;
    background: ${({ theme }) => theme.colors.white.primary};
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100%;
    margin: 5px;
  }
  div {
    width: 280px;
    height: 159px;
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

    display: flex;
    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.colors.yellow.tertiary};
  }

  div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.white.primary};

    padding: 7px;
  }

  button {
    width: 211px;
    height: 35px;
    background: ${({ theme }) => theme.colors.yellow.secondary};
    border-radius: 15px;
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray.sextiary};
  }
`;
