import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #eeb200 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 75px;
    height: 75px;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #606060;
  }
`;
export const StyledSocial = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    text-decoration: none;
    list-style: none;
    gap: 1rem;
    height: 88px;
    margin-top: 9px;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #606060;
  }
  li {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  li > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #919191;
  }

  li > img {
    height: 30px;
    width: 30px;
  }
`;
export const StyledDevelopes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #606060;
  }

  img {
    height: 30px;
    width: 30px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 50%;
    justify-content: center;
  }
`;
