import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authActions";

function LoginForm({ handleClickButton, setActive }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login(email, password))
    .then(() => {
      setActive(false);
    })
    .catch((error) => {
     setError(error);
    })
    
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
