import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authActions";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function LoginForm({ handleClickButton, setActive }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login(email, password))
      .then(() => {
        setActive(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="modal__title">Вход</div>
      <form onSubmit={handleSubmit} action="">
        <ul className="modal__list">
          <li className="modal__list-element">
            <label htmlFor="login">Email</label>
            <input
              name="login"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="password">Пароль</label>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <button className="modal__list-button" type="submit">
              Войти
            </button>
          </li>
        </ul>
      </form>
      <div className="modal__warning">
        <span>
          Еще не зарегестрированы?{" "}
          <Link onClick={() => handleClickButton()} href="#">
            Регистрация
          </Link>
        </span>
      </div>
    </>
  );
}

export default LoginForm;
