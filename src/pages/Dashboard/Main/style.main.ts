import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
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
    font-family: Roboto;
    font-weight: 700;
    font-size: 36px;
  }
  .campainTitle {
    font-family: Roboto;
    font-weight: 700;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.yellow.secondary};
  }
`;
