import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Account, LoginForm } from "../../pages";
import { RegisteredGuard, UnregisteredGuard } from "../guards/guards";

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RegisteredGuard>
            <LoginForm />
          </RegisteredGuard>
        }
      />
      <Route
        path="/account"
        element={
          <UnregisteredGuard>
            <Account />
          </UnregisteredGuard>
        }
      />
    </Routes>
  );
};
