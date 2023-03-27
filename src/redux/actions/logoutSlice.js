import { logout } from "../reducers/Auth/loginSlice";
import axios from "axios";
import Cookies from "js-cookie";

export const logoutUser = () => async (dispatch) => {
  try {
    axios.post("http://127.0.0.1:8000/logout/", null, {
      headers: {
        Authorization: `Token ${Cookies.get("token")}`,
      },
    });

    dispatch(logout());
    Cookies.remove("token");
    Cookies.remove("user");
    function reload() {
      window.location.reload();
    }

    setTimeout(reload, 1000)
  } catch {
    console.log("Failed to log out");
  }
};
