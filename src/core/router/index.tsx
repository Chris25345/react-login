import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Account, LoginForm } from "../../pages";
import { APP_ROUTES } from "../constants";
import { RegisteredGuard, UnregisteredGuard } from "../guards/guards";

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.main}
        element={
          <RegisteredGuard>
            <LoginForm />
          </RegisteredGuard>
        }
      />
      <Route
        path={APP_ROUTES.account}
        element={
          <UnregisteredGuard>
            <Account />
          </UnregisteredGuard>
        }
      />
    </Routes>
  );
};
