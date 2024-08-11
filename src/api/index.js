import { API_BASE_URL, AUTH_KEY } from "@/constants/variables";
import axios from "axios";

const API = axios.create({
  baseURL: API_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(localStorage.getItem(AUTH_KEY))?.state.auth
        .token;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export const fetcher = async (url) => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

export default API;
