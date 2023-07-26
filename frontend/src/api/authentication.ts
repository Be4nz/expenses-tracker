import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/users";

export const checkAuthenticated = async () => {
  try {
    const response = await axios.get(baseUrl + "/checkAuthenticated", {
      withCredentials: true,
    });
    if (response.status === 200 && response.data.status === "success") {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    return false;
  }
};

export const getUserId = async () => {
  try {
    const id = await axios.get(baseUrl + "/getCurrent", {
      withCredentials: true,
    });
    return id.data.userId;
  } catch (error) {}
};
