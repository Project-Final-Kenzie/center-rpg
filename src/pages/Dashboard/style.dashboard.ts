import styled from "styled-components";
import backDashboard1 from "../../assets/img/backDashboard1.png";

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: black;
  background-image: url(${backDashboard1});
  background-size: cover;

  @media (max-width: 420px) {
    height: 700px;
    justify-content: start;
  }
`;
