import styled from "styled-components";
import background from "../../../../assets/img/image0.png";

export const Section2 = styled.section`
  font-family: Roboto;
  width: 48%;
  border-radius: 80px 8px 80px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    height: 30px;
    font-size: 2.3vw;
    margin-bottom: 20px;
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
`;
