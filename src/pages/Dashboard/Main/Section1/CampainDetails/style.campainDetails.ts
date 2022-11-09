import styled from "styled-components";

export const CampainDetails = styled.div`
  font-family: Roboto;
  color: white;
  span {
    line-height: 20px;
    font-size: 1.7vw;
    font-weight: 700;
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
`;
