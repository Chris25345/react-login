import { FC, ReactNode } from "react";
import { NavigationBox, Typography } from "./styled";

interface NavigationProps {
  button: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ button }) => {
  return (
    <NavigationBox>
      <Typography>Cat Image Generator</Typography>
      {button}
    </NavigationBox>
  );
};
