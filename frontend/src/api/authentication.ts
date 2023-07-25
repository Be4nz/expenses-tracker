import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/users";

export const checkAuthenticated = async () => {
  try {
    const response = await axios.get(baseUrl + "/checkAuthenticated", {
      withCredentials: true,
    });
    console.log(response);
    if (response.status === 200 && response.data.status === "success") {
      console.log("User is authenticated");
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    return false;
  }
};

export const checkNotAuthenticated = async () => {
  try {
    const response = await axios.get(baseUrl + "/checkNotAuthenticated", {
      withCredentials: true,
    });

    if (response.data.isAuthenticated) {
      console.log("User is authenticated");
    } else {
      console.log("User is not authenticated");
    }
  } catch (error) {
    console.log(error);
  }
};
