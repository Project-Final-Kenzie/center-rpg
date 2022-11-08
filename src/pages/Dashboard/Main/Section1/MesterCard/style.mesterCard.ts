import styled from "styled-components";

export const MesterCard = styled.div`
  color: white;
  padding-left: 14px;
  border-radius: 80px 8px 80px 8px;
  height: max(13vw, 130px);
  display: flex;
  align-items: center;
  border: solid 1px white;
  margin-top: 30px;
  margin-bottom: 40px;
  img {
    border-radius: 80px 8px 80px 8px;
    max-height: max(12vw, 115px);
    width: max(13vw, 115px);
    margin-right: 3vw;
    object-fit: cover;
  }
  h3 {
    margin-bottom: 1.5vw;
    text-align: center;
  }
  p {
    line-height: 18px;
    font-size: 1.2vw;
  }
`;
