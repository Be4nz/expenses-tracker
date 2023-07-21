import axios from "axios";
import { LoginData } from "../types/login";
const baseUrl = process.env.REACT_APP_API_URL + "/auth";

export const register = (loginData: LoginData) => {
  const request = axios.post(baseUrl + "/register", loginData, {
    withCredentials: true,
  });
  return request.then((response) => response.data);
};

export const login = (loginData: LoginData) => {
  const request = axios.post(baseUrl + "/login", loginData, {
    withCredentials: true,
  });
  return request.then((response) => response.data);
};

export const user = () => {
  const request = axios.get(baseUrl + "/user", {
    withCredentials: true,
  });
  return request.then((response) => response.data);
};
