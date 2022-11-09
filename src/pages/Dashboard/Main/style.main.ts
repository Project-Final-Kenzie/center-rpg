import styled from "styled-components";

export const Main = styled.main`
  margin: 60px 13px 60px 13px;
  height: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(256, 256, 256, 0.1);
  border-radius: 80px 8px 80px 8px;

  .sections {
    display: flex;
    justify-content: space-between;
    width: 90%;
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
`;
