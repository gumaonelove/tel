import axios, {AxiosHeaders} from "axios";
import {parseCookies} from "nookies";

const apiClient = (baseURL: string) => {
  const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.defaults.withCredentials = true;

  api.interceptors.request.use((config) => {
    if (process.browser && config) {
      const cookies = parseCookies(null);
    }

    return config;
  });

  return api;
};

export default apiClient;
