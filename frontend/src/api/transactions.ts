import axios from "axios";
import { Transaction } from "../types/transaction";
const baseUrl = process.env.REACT_APP_API_URL + "/transactions";

export const getTransactions = async (limit: number) => {
  const request = axios.post(baseUrl + "/get", { limit: limit });
  return request.then((response) => response.data);
};

export const getIncomeTransactions = async (limit: number) => {
  const request = axios.post(baseUrl + "/get/income", { limit: limit });
  return request.then((response) => response.data);
};

export const getExpenseTransactions = async (limit: number) => {
  const request = axios.post(baseUrl + "/get/expense", { limit: limit });
  return request.then((response) => response.data);
};

export const create = async (newObject: Transaction) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export const getTransactionById = async (id: string) => {
  const request = axios.get(baseUrl + "/single/" + id);
  return request.then((respone) => respone.data);
};

export const getCount = async () => {
  const request = axios.get(baseUrl + "/count");
  return request.then((response) => response.data);
};

export const getIncomeCount = async () => {
  const request = axios.get(baseUrl + "/count/income");
  return request.then((response) => response.data);
};

export const getExpenseCount = async () => {
  const request = axios.get(baseUrl + "/count/expense");
  return request.then((response) => response.data);
};

export const deleteTransaction = async (id: string) => {
  const request = axios.delete(baseUrl + "/single/" + id);
  return request.then((response) => response.data);
};

export const updateTransaction = async (
  id: string,
  transaction: Transaction
) => {
  const request = axios.put(baseUrl + "/single/" + id, transaction);
  return request.then((response) => response.data);
};
