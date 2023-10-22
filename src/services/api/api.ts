import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_PRIVATE_API,
});

export default api;
