import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../reducers/Auth/loginSlice";
import api from "../../api/api";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = {
      email: email,
      password: password,
    };
    await api.post("http://127.0.0.1:8000/accounts/login/", data, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(loginSuccess());
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
