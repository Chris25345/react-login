import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./core/router";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
