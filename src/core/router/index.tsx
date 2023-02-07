import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Account, LoginForm } from "../../pages";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};
