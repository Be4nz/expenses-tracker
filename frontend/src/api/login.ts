import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/users";

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    baseUrl + "/login",
    {
      email: email,
      password: password,
    },
    { withCredentials: true }
  );

  return response;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  password2: string
) => {
  const response = await axios.post(
    baseUrl + "/register",
    {
      name: name,
      email: email,
      password: password,
      password2: password2,
    },
    { withCredentials: true }
  );
  return response;
};

export const logout = async () => {
  await axios.get(baseUrl + "/logout", { withCredentials: true });
};
