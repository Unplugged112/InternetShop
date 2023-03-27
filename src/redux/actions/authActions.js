import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../reducers/Auth/loginSlice";
import axios from "axios";
import Cookies from "js-cookie";

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
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.error(error.response.data);
      });
    function dataUser() {
      axios
        .get("http://127.0.0.1:8000/profile/", {
          headers: {
            Authorization: `Token ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          Cookies.set("user", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    function reload() {
      window.location.reload();
    }
    setTimeout(dataUser, 1000);
    setTimeout(reload, 1500);
  } catch (error) {
    console.error(error.response.data);
  }
};
