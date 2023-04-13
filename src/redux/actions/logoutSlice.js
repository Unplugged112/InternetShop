import { logout } from "../reducers/Auth/loginSlice";
import axios from "axios";
import Cookies from "js-cookie";
import { persistor } from "..";
import api from "../../api/api";
export const logoutUser = () => async (dispatch) => {
  try {
    await api.post("accounts/logout/", null);

    dispatch(logout());
    function reload() {
      window.location.reload();
    }
    setTimeout(reload, 1000)
  } catch {
    console.log("Failed to log out");
  }
};
