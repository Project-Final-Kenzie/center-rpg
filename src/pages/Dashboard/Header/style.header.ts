import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow.secondary};
  display: flex;
  height: 85px;
  width: 100%;
  justify-content: space-between;
  padding-right: 60px;
  img {
    max-height: 55px;
  }
`;
