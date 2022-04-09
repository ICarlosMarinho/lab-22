import { Wrapper } from "./Button.styles";

export type ButtonProps = {
  fullWidth?: boolean;
  onClick?: () => void;
} & Required<WithChildren>;

const Button = ({ children, fullWidth, onClick }: ButtonProps) => (
  <Wrapper fullWidth={fullWidth} onClick={onClick}>
    {children}
  </Wrapper>
);

export default Button;
