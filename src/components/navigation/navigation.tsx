import { FC, memo, ReactNode } from "react";
import { NavigationBox, Typography } from "./styled";

interface NavigationProps {
  button?: ReactNode;
}

export const Navigation: FC<NavigationProps> = memo(({ button }) => {
  return (
    <NavigationBox doesButtonExist={!!button}>
      <Typography>My Awesome App</Typography>
      {button}
    </NavigationBox>
  );
});
