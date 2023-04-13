import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials:true,
});
const csrftoken = Cookies.get("csrftoken");
api.interceptors.request.use((config) => {
  config.headers["X-CSRFToken"] = csrftoken;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
