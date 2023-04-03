import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../reducers/Auth/loginSlice";
import axios from "axios";
import Cookies from "js-cookie";
import { persistor } from "..";
import {
  getUserSuccess,
  getUserStart,
  getUserFailure,
} from "../reducers/userSlice/userSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((response) => {
        dispatch(loginSuccess());
        Cookies.set("token", response.data.token);
        setTimeout(reload, 1500);
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data));
        console.error(error.response.data);
      });

    function reload() {
      window.location.reload();
    }
  } catch (error) {
    console.error(error.response.data);
  }
};
