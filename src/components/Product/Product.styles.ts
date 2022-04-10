import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: ${({ theme }) => theme.border.radius.default};
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius.default};
`;
