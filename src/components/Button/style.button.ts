import styled, { css } from "styled-components";
import { Iprops } from "../../interface/typesStyled";

export const Button = styled.button`
  ${({ font }: Iprops) => {
    switch (font) {
      case "primary":
        return css`
          width: 100%;
          height: 50px;
          padding: 0 10px 0 10px;
          border-radius: 20px;
          margin-top: 35px;
          background-color: ${({ theme }) => theme.colors.yellow.primary};
        `;
      case "secondary":
        return css`
          width: 100%;
          height: 45px;
          padding: 0 10px 0 10px;
          border-radius: 20px;
          margin-top: 30px;
          background-color: ${({ theme }) => theme.colors.yellow.primary};
        `;
      case "home_login":
        return css`
          background-color: ${({ theme }) => theme.colors.yellow.primary};
        `;
    }
  }}
`;
