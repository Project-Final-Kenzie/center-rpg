import styled from "styled-components";

export const Section1 = styled.section`
  width: 35%;
  height: 52vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1.8vw;

  @media (max-width: 420px) {
    flex-direction: column-reverse;
    justify-content: disabled;
    height: auto;
    width: 100%;
    align-items: center;
  }
`;
