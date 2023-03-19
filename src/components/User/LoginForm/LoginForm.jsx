import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
function LoginForm({ handleClickButton }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((response) => {
        Cookies.set("token", response.data.token);
        setError("");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <>
      <div className="modal__title">Вход</div>
      <form onSubmit={handleSubmit} action="">
        <ul className="modal__list">
          <li className="modal__list-element">
            <label htmlFor="login">Логин</label>
            <input
              name="login"
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
            <button type="submit">Войти</button>
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
