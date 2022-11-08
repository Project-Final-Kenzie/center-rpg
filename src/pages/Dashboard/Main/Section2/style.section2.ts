import styled from "styled-components";
import background from "../../../../assets/img/image0.png";

export const Section2 = styled.section`
  width: 48%;
  height: 100%;
  border-radius: 80px 8px 80px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    height: 30px;
  }
  div {
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    width: 43vw;
    height: 48vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 0px 30px 0px 30px;
  }
`;
