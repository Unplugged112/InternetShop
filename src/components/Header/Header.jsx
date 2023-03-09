import React from "react";
import styles from "./Header.scss"
function Header() {
  return (
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
              <a href="">Регистрация</a>
            </div>
            <div className="header__verification-login">
              <a href="">Войти</a>
            </div>
          </div>
          <div className="header__basket">
            <img src="/image/Header/Basket.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
