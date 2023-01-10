import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_DEV_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
