import { ILoginFormData } from "../../pages/login-form/types";

const LS_KEY = "form-data";

export const setFormData = (data: ILoginFormData) => {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const getFormData = () => {
  const data = localStorage.getItem(LS_KEY);
  return data ? JSON.parse(data) : undefined;
};

export const clearFormData = () => {
  localStorage.setItem(LS_KEY, "");
};

export const checkIfLoggedIn = () => {
  return localStorage.getItem(LS_KEY) ? true : false;
};
