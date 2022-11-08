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
          background-color: ${({ theme }) => theme.colors.yellow.secondary};
          transition: 0.8s;
          margin-top: 1rem;

          &:hover {
            filter: brightness(0.9);
          }
        `;
      case "secondary":
        return css`
          width: 100%;
          height: 45px;
          padding: 0 10px 0 10px;
          border-radius: 20px;
          background-color: ${({ theme }) => theme.colors.yellow.secondary};
          transition: 0.8s;
          margin-top: 1rem;

          &:hover {
            filter: brightness(0.9);
          }
        `;
    }
  }}
`;
export const Button2 = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100px;
  height: 38px;
  border-radius: 8px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 1s;
  :hover {
    opacity: 0.9;
  }
`;
