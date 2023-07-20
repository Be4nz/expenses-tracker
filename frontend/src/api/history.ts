import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/transactions";

export const getMinDate = async () => {
  const request = axios.get(baseUrl + "/date/min");
  return request.then((response) => response.data);
};

export const getMaxDate = async () => {
  const request = axios.get(baseUrl + "/date/max");
  return request.then((response) => response.data);
};

export const getTransactionsBetweenDates = async (
  startDate: Date,
  endDate: Date
) => {
  const request = axios.post(baseUrl + "/date/get", {
    startDate: startDate,
    endDate: endDate,
  });
  return request.then((response) => response.data);
};
