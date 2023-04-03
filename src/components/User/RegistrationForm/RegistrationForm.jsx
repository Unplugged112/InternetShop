import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./RegistrationForm.scss";
import InputMask from "react-input-mask";
function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      first_name: name,
      last_name: surname,
      phone: phone,
      password: password,
    };
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    if (password === confirmPassword) {
      if (email) {
        if (surname) {
          if (name) {
            if (phone) {
              if (validateEmail(email)) {
                axios
                  .post("http://127.0.0.1:8000/register/", data)
                  .then((response) => {
                    Cookies.set("token", response.data.token);
                    setTimeout(reload, 1500);
                  })
                  .catch((error) => {
                    console.log(error.data.error);
                  });
              } else{
                setErrorPass(true);
                setErrorMessage("Неверная почта");
              }
            } else {
              setErrorPass(true);
              setErrorMessage("Введите телефон");
            }
          } else {
            setErrorPass(true);
            setErrorMessage("Введите имя");
          }
        } else {
          setErrorPass(true);
          setErrorMessage("Введите фамилию");
        }
      } else {
        setErrorPass(true);
        setErrorMessage("Введите почту");
      }
    } else {
      setErrorPass(true);
      setErrorMessage("Пароли не совпадают");
    }
  };

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setError(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setError(false);
  }

  function reload() {
    window.location.reload();
  }

  return (
    <>
      <div className="modal__title">Регистрация</div>

      <form action="" onSubmit={handleSubmit}>
        <ul className="modal__list">
          <li className="modal__list-element">
            <label htmlFor="username">Имя</label>
            <input
              type="text"
              name="username"
              placeholder="Имя"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="lastname">Фамилия</label>
            <input
              name="lastname"
              type="text"
              placeholder="Имя"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="phone">Телефон</label>
            <InputMask
              mask="+7(999)999-99-99"
              name="phone"
              type="text"
              placeholder="Телефон"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="password">Придумайте пароль</label>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="confirmation">Подтвердите пароль</label>
            <input
              name="confirmation"
              type="password"
              placeholder="Пароль"
              onChange={handleConfirmPasswordChange}
            />
            {errorPass && <p style={{ color: "red" }}>{errorMessage}</p>}
          </li>
          <li className="modal__list-element">
            {error && <p>{error}</p>}
            <button type="submit">Зарегестрироваться</button>
          </li>
        </ul>
      </form>
      <div className="modal__warning">
        <span>
          Нажимая кнопку «Зарегистрироваться», я даю свое согласие на сбор и
          обработку моих персональных данных в соответствии с{" "}
          <Link to="">Политикой</Link> и принимаю условия{" "}
          <Link to="">Пользовательского соглашения</Link>
        </span>
      </div>
      {/* <form onSubmit={handleSubmit} action="">
        <ul className="modal__list">
          <li className="modal__list-element">
            <label htmlFor="name">Имя</label>
            <input
              name="username"
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="name">Фамилия</label>
            <input
              name="lastname"
              type="text"
              placeholder="Имя"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="phone">Телефон</label>
            <input
              name="phone"
              type="text"
              placeholder="Телефон"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="password">Придумайте пароль</label>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
          </li>
          <li className="modal__list-element">
            <label htmlFor="confirmation">Подтвердите пароль</label>
            <input
              name="confirmation"
              type="password"
              placeholder="Пароль"
              onChange={handleConfirmPasswordChange}
            />
            {errorPass && <p style={{ color: "red" }}>{errorMessage}</p>}
          </li>
          <li className="modal__list-element">
            {error && <p>{error}</p>}
            <button type="submit">Зарегестрироваться</button>
          </li>
        </ul>
      </form>
      <div className="modal__warning">
        <span>
          Нажимая кнопку «Зарегистрироваться», я даю свое согласие на сбор и
          обработку моих персональных данных в соответствии с{" "}
          <Link to="">Политикой</Link> и принимаю условия{" "}
          <Link to="">Пользовательского соглашения</Link>
        </span>
      </div> */}
    </>
  );
}

export default RegistrationForm;
