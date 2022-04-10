import { ButtonHTMLAttributes } from "react";
import { StyleProps } from "./Button.model";
import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  ...rest
}: WithChildren<StyleProps & ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
