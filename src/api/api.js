import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials:true,
});
const token = Cookies.get("token")

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Token ${token}`;
  return config;
});

export default api;
