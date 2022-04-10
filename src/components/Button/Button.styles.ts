import styled, { css } from "styled-components";

import { StyleProps } from "./Button.model";

export const StyledButton = styled.button<StyleProps>`
  cursor: pointer;
  border: none;
  padding: 0.8rem 1.6rem;
  text-decoration: none;

  ${({ theme, width, height }) => css`
    color: ${theme.colors.white};
    width: ${width || "100%"};
    height: ${height || "40px"};
    border-radius: ${theme.border.radius.default};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
    background-color: ${theme.colors.primary};
  `}
`;
