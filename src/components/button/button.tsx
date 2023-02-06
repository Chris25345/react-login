import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  width,
  height,
  color,
  ...props
}) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
