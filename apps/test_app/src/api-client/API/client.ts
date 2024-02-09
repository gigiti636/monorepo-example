import axios from "axios";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const state = store.getState() as RootState;
  const token = state?.user?.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const language = state?.client?.language;
  if (language) {
    config.headers["X-Preferred-Language"] = language;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    //console.log('Response Data:', response.data);
    return response;
  },
  (error) => {
    //console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
