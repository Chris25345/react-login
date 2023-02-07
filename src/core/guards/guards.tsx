import { FC, memo } from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { checkIfLoggedIn } from "../utils/local-storage";

interface IGuard {
  children: JSX.Element;
  redirectTo?: string;
}

export const UnregisteredGuard: FC<IGuard> = memo(
  ({ children, redirectTo = APP_ROUTES.main }) => {
    const isLoggedIn = checkIfLoggedIn();
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
  }
);

export const RegisteredGuard: FC<IGuard> = memo(
  ({ children, redirectTo = APP_ROUTES.account }) => {
    const isLoggedIn = checkIfLoggedIn();
    return !isLoggedIn ? children : <Navigate to={redirectTo} />;
  }
);
