import styled from "styled-components";

export const Main = styled.main`
  margin: 60px 13px 60px 13px;
  height: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(256, 256, 256, 0.1);
  border-radius: 80px 8px 80px 8px;

  .sections {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  @media (max-width: 420px) {
    text-align: center;
    height: 600px;
    margin: 25px 5px 16px 5px;
    .sections {
      flex-direction: column;
      align-items: center;
      height: 600px;
      justify-content: initial;
      gap: 10px;
      margin-top: 0px;
    }
  }
`;
export const CampainTitle = styled.div`
  text-align: center;
  .campain {
    color: white;
    font-family: Roboto;
    font-weight: 700;
    font-size: 3.3vw;
  }
  .campainTitle {
    font-family: Roboto;
    font-weight: 700;
    font-size: 3.3vw;
    color: ${({ theme }) => theme.colors.yellow.secondary};
  }
  @media (max-width: 420px) {
    width: 184px;
    .campain {
      font-size: 20px;
      margin-top: 15px;
    }
    .campainTitle {
      font-size: 16px;
    }
  }
`;
