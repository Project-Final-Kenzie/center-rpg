import styled from "styled-components";
import backDashboard1 from "../../assets/img/backDashboard1.png";

export const Background = styled.div`
  width: 100vw;
  height: max(100vh, 850px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: black;
  background-image: url(${backDashboard1});
  background-size: cover;
`;
