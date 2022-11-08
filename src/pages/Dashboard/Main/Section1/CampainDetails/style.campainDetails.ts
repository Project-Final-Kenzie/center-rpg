import styled from "styled-components";

export const CampainDetails = styled.div`
  margin-bottom: 40px;
  font-family: Roboto;
  color: white;
  span {
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .property {
    color: ${({ theme }) => theme.colors.yellow.secondary};
    font-size: 16px;
    font-weight: 700;
  }
`;
