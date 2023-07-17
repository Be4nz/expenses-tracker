import axios from "axios";
import { Transaction } from "../types/transaction";
const baseUrl = process.env.REACT_APP_API_URL + "/transactions";

export const getTransactions = async (limit: number) => {
  const request = axios.post(baseUrl + "/get", { limit: limit });
  return request.then((response) => response.data);
};

export const create = async (newObject: Transaction) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export const getCount = async () => {
  const request = axios.get(baseUrl + "/count");
  return request.then((response) => response.data);
};
