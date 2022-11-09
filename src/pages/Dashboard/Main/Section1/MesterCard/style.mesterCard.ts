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
  margin-top: 3vw;
  width: 38vw;
  img {
    border-radius: 80px 8px 80px 8px;
    max-height: max(12vw, 115px);
    width: 13vw;
    height: 12vw;
    margin-right: 3vw;
    object-fit: cover;
  }
  h3 {
    margin-bottom: 1.5vw;
    text-align: center;
    font-size: 1.5vw;
  }
  p {
    line-height: 1.6vw;
    font-size: 1.2vw;
  }
  @media (max-width: 1200px) {
    border-radius: 4vw 6px 4vw 6px;
    img {
      border-radius: 4vw 6px 4vw 6px;
    }
  }

  @media (max-width: 420px) {
    width: 340px;
    height: 118px;
    border-radius: 20px 8px 20px 8px;
    margin-top: 6px;
    img {
      height: 90px;
      width: 83px;
      border-radius: 20px 8px 20px 8px;
    }
    h3 {
      font-size: 15px;
      text-align: left;
    }
    p {
      font-size: 14px;
      line-height: 18px;
    }
    .textAlign {
      text-align: left;
    }
  }
`;
