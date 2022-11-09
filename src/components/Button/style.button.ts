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
  width: 9vw;
  min-width: 60px;
  min-height: 30px;
  height: 3.8vw;
  border-radius: 8px;
  font-family: Roboto;
  font-weight: 700;
  font-size: max(14px, 1.8vw);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 1s;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 70px;
    height: 25px;
    font-size: 12px;
  }
`;

export const Button3 = styled.span`
  color: ${({ theme }) => theme.colors.gray.quartiary};
  cursor: pointer;
  width: 100%;
  height: 4vw;
  font-family: Inter;
  background-color: ${({ theme }) => theme.colors.yellow.tertiary};
  font-size: 1.8vw;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 3vw;
  font-family: Roboto;
  transition: all 0.8s;
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow.quartiary};
  }

  @media (max-width: 1200px) {
    border-radius: 5px;
  }

  @media (max-width: 420px) {
    height: 26px;
    font-size: 12px;
  }
`;
