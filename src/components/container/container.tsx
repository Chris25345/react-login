import { FC, memo, PropsWithChildren } from "react";
import { Navigation } from "../navigation";
import { Content, MainContainer } from "./styled";
import { IContainerProps } from "./types";

export const Container: FC<PropsWithChildren<IContainerProps>> = memo(
  ({ children, button }) => {
    return (
      <MainContainer>
        <Navigation button={button} />
        <Content>{children}</Content>
      </MainContainer>
    );
  }
);
