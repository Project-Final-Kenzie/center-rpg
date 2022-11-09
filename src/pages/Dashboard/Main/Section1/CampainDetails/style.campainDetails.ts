import styled from "styled-components";

export const CampainDetails = styled.div`
  font-family: Roboto;
  color: white;
  span {
    font-size: 1.7vw;
    font-weight: 700;
  }
  div {
    height: 1.9vw;
  }
  .property {
    color: ${({ theme }) => theme.colors.yellow.secondary};
    font-size: 1.4vw;
    font-weight: 700;
  }
  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue.primary};
    font-size: 1.4vw;
    font-weight: 700;
  }
  @media (max-width: 420px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 16px;
    }
    .property {
      font-size: 14px;
    }
    a:link {
      font-size: 14px;
    }
    div {
      height: 20px;
    }
  }
`;
