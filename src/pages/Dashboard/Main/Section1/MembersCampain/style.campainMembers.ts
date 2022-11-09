import styled from "styled-components";

export const CampainMembers = styled.div`
  margin-left: 5vw;
  margin-top: 1.3vw;
  h2 {
    font-family: Roboto;
    font-size: 2vw;
    font-weight: 700;
    text-align: right;
    color: white;
  }
  .players {
    border: solid 1px white;
    height: 13vw;
    border-radius: 80px 8px 80px 8px;
    padding-top: 3.2vw;
    padding-left: 15px;
    font-family: Roboto;
    color: white;
    overflow-y: auto;
  }
  .player {
    margin-bottom: 20px;
    font-size: 1.2vw;
  }
  @media (max-width: 1200px) {
    .players {
      border-radius: 5vw 6px 5vw 6px;
    }
  }
  @media (max-width: 420px) {
    margin-left: 0px;
    width: 184px;
    .members {
      visibility: hidden;
      height: 0px;
    }
  }
`;
