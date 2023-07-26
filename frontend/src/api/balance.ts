import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

export const getIncome = async () => {
  const request = axios.get(baseUrl + "/income", {
    withCredentials: true,
  });
  return request.then((response) => response.data);
};

export const getExpense = async () => {
  const request = axios.get(baseUrl + "/expense", {
    withCredentials: true,
  });
  return request.then((response) => response.data);
};
