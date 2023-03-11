import React from "react";
import Modal from "../Modal/Modal";
import styles from "./Header.scss";
function Header() {
  const [modalActive, setModalActive] = React.useState(false);
  const [buttonPressed, setButtonPressed] = React.useState(null);
  const handleClickButton1 = () => {
    setModalActive(true);
    setButtonPressed("button1");
  };
  const handleClickButton2 = () => {
    setModalActive(true);
    setButtonPressed("button2");
  };
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__left">
            <div className="header__logo">Logo</div>
            <div className="header__filters">
              <img src="/image/Header/Filters.png" alt="" />
              <span>Каталог</span>
            </div>
          </div>
          <div className="header__right">
            <nav className="header__menu menu">
              <ul className="menu__list">
                <li>
                  <a href="">Главная</a>{" "}
                </li>
                <li>
                  <a href="">О нас</a>{" "}
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Блог</a>
                </li>
                <li>
                  <a href="">Акции</a>
                </li>
              </ul>
            </nav>
            <div className="header__verification">
              <div className="header__verification-reg">
                <a onClick={() => handleClickButton1()} href="#">
                  Регистрация
                </a>
              </div>
              <div className="header__verification-login">
                <a onClick={() => handleClickButton2()} href="#">
                  Войти
                </a>
              </div>
            </div>
            <div className="header__basket">
              <img src="/image/Header/Basket.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
      {buttonPressed == "button1" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="modal__title">Регистрация</div>
          <form action="">
            <ul className="modal__list">
              <li className="modal__list-element">
                <label htmlFor="name">Имя</label>
                <input name="name" type="text" placeholder="Имя" />
              </li>
              <li className="modal__list-element">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="Email" />
              </li>
              <li className="modal__list-element">
                <label htmlFor="phone">Телефон</label>
                <input name="phone" type="text" placeholder="Телефон" />
              </li>
              <li className="modal__list-element">
                <label htmlFor="password">Придумайте пароль</label>
                <input name="password" type="password" placeholder="Пароль" />
              </li>
              <li className="modal__list-element">
                <label htmlFor="confirmation">Подтвердите пароль</label>
                <input
                  name="confirmation"
                  type="password"
                  placeholder="Пароль"
                />
              </li>
              <li className="modal__list-element">
                <button>Зарегестрироваться</button>
              </li>
            </ul>
          </form>
          <div className="modal__warning">
            <span>
              Нажимая кнопку «Зарегистрироваться», я даю свое согласие на сбор и
              обработку моих персональных данных в соответствии с{" "}
              <a href="">Политикой</a> и принимаю условия{" "}
              <a href="">Пользовательского соглашения</a>
            </span>
          </div>
        </Modal>
      )}
      {buttonPressed == "button2" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="modal__title">Вход</div>
          <form action="">
            <ul className="modal__list">
              <li className="modal__list-element">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="Email" />
              </li>
              <li className="modal__list-element">
                <label htmlFor="password">Пароль</label>
                <input name="password" type="password" placeholder="Пароль" />
              </li>
              <li className="modal__list-element">
                <button>Войти</button>
              </li>
            </ul>
          </form>
          <div className="modal__warning">
            <span>
              Еще не зарегестрированы?{" "}
              <a onClick={() => handleClickButton1()} href="#">
                Регестрация
              </a>
            </span>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Header;
