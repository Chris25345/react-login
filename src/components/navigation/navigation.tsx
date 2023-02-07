import { FC, memo } from "react";
import { NavigationBox, Typography } from "./styled";
import { INavigationProps } from "./types";

export const Navigation: FC<INavigationProps> = memo(({ button }) => {
  return (
    <NavigationBox doesButtonExist={!!button}>
      <Typography>My Awesome App</Typography>
      {button}
    </NavigationBox>
  );
});
