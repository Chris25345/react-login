import { FC, PropsWithChildren, ButtonHTMLAttributes, memo } from "react";
import { ButtonContainer } from "./styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  color?: string;
  radius?: number;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
  ({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
  }
);
