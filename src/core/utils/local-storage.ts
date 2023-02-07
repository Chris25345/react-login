import { ILoginFormData } from "../../pages/login-form/types";
import { LS_KEY } from "../constants";

export const setFormData = (data: ILoginFormData) => {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const clearFormData = () => {
  localStorage.setItem(LS_KEY, "");
};

export const checkIfLoggedIn = () => {
  return localStorage.getItem(LS_KEY) ? true : false;
};
