import styled from "styled-components";
import background from "../../../../assets/img/image0.png";

export const Section2 = styled.section`
  font-family: Roboto;
  width: 48%;
  border-radius: 80px 8px 80px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;

    font-size: 2.3vw;
    margin-bottom: 0px;
    font-weight: 700;
  }
  div {
    border-radius: 80px 8px 80px 8px;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

    height: 48vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
  }
  p {
    padding: 0px 30px 0px 30px;
    color: ${({ theme }) => theme.colors.gray.quartiary};
    font-size: 1.3vw;
  }
  @media (max-width: 420px) {
    width: 340px;
    h2 {
      font-size: 20px;
      margin-bottom: 0px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    div {
      border-radius: 60px 6px 60px 6px;
    }
  }
`;
