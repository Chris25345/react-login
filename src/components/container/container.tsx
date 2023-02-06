import { FC, PropsWithChildren, ReactNode } from "react";
import { Navigation } from "../navigation";
import { Content, MainContainer } from "./styled";

interface ContainerProps {
  button: ReactNode;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  button,
}) => {
  return (
    <MainContainer>
      <Navigation button={button} />
      <Content>{children}</Content>
    </MainContainer>
  );
};
