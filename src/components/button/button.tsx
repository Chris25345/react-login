import { FC, PropsWithChildren, memo } from "react";
import { ButtonContainer } from "./styled";
import { IButtonProps } from "./types";

export const Button: FC<PropsWithChildren<IButtonProps>> = memo(
  ({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
  }
);
