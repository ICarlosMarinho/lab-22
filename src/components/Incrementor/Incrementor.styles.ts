import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius.default};
  `}
`;

export const Quantity = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.small};
  `}
`;
