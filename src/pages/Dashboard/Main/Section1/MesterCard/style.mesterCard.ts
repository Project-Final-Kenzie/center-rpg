import styled from "styled-components";

export const MesterCard = styled.div`
  font-family: Roboto;
  color: white;
  padding-left: 14px;
  border-radius: 80px 8px 80px 8px;
  height: 13vw;
  display: flex;
  align-items: center;
  border: solid 1px white;
  margin-top: 30px;
  width: 38vw;
  img {
    border-radius: 80px 8px 80px 8px;
    max-height: max(12vw, 115px);
    width: 13vw;
    margin-right: 3vw;
    object-fit: cover;
  }
  h3 {
    margin-bottom: 1.5vw;
    text-align: center;
    font-size: 1.5vw;
  }
  p {
    line-height: max(18px, 1.6vw);
    font-size: 1.2vw;
  }
`;
