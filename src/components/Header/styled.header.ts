import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.yellow.secondary};
  box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.rgb.tertiary};

  div {
    width: 90vw;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  img {
    max-height: 79px;
    max-width: 64px;
  }
`;
