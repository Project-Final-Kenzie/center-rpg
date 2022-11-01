import styled, {css} from "styled-components";
import { Iprops } from "../../interface/typesStyled";


export const StyledInput = styled.input`
${({ font }: Iprops) => {

    switch (font) {
        case "primary":
            return css`

                width: 100%;
                height: 50px;
                padding: 0 10px 0 10px;
                border-radius: 8px;
                background-color: ${({theme}) => theme.colors.white.tertiary};
            
            `     
    }
}}

`
