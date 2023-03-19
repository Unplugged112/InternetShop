import React from "react";
import Modal from "../Modal/ModalOnClick/Modal";
import styles from "./Header.scss";
import { Link } from "react-router-dom";
import RegistrationForm from "../User/RegistrationForm/RegistrationForm";
import LoginForm from "../User/LoginForm/LoginForm";
import ModalRight from "../Modal/Sidebar/Sidebar";
import Basket from "./Basket/Basket";
const product = [
  {
    id: "1",
    name: "Кнопка вызова персонала T117",
    categoryId: "1",
  },
  {
    id: "2",
    name: "Часы-пейджер TD108",
    categoryId: "1",
  },
  {
    id: "3",
    name: "Беспроводной приемник-дисплей вызовов TD105",
    categoryId: "2",
  },
  {
    id: "4",
    name: "Смартфоны",
    categoryId: "3",
  },
  {
    id: "3",
    name: "Беспроводной приемник-дисплей вызовов TD105",
    categoryId: "2",
  },
  {
    id: "4",
    name: "Смартфоны",
    categoryId: "3",
  },
  {
    id: "3",
    name: "Беспроводной приемник-дисплей вызовов TD105",
    categoryId: "2",
  },
  {
    id: "4",
    name: "Смартфоны",
    categoryId: "3",
  },
  {
    id: "3",
    name: "Беспроводной приемник-дисплей вызовов TD105",
    categoryId: "2",
  },
  {
    id: "4",
    name: "Смартфоны",
    categoryId: "3",
  },
];
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
  const handleClickButton3 = () => {
    setModalActive(true);
    setButtonPressed("button3");
  };
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__left">
            <div className="header__wrapper">
              <div className="header__logo">Logo</div>
              <div className="header__filters">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 2H0.5C0.22386 2 0 1.77614 0 1.5V0.5C0 0.22386 0.22386 0 0.5 0H17.5C17.7761 0 18 0.22386 18 0.5V1.5C18 1.77614 17.7761 2 17.5 2ZM15 7.5V6.5C15 6.2239 14.7761 6 14.5 6H3.5C3.22386 6 3 6.2239 3 6.5V7.5C3 7.7761 3.22386 8 3.5 8H14.5C14.7761 8 15 7.7761 15 7.5ZM12 12.5V13.5C12 13.7761 11.7761 14 11.5 14H6.5C6.22386 14 6 13.7761 6 13.5V12.5C6 12.2239 6.22386 12 6.5 12H11.5C11.7761 12 12 12.2239 12 12.5Z"
                    fill="black"
                  />
                </svg>

                <p>
                  <Link className="header__filters-link" to="/catalog">
                    Каталог
                  </Link>
                  {/* <div className="menu__drop">
                    <div className="menu__drop-container container">
                      <div className="menu__drop-list">
                        <ul className="list">
                          {arr &&
                            arr.map((item, i) => (
                              <li key={i} className="list__element">
                                <span onClick={() => switchMenu(i)}>
                                  {item}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="menu__drop-products">
                        <div className="products__card">
                          <div className="products__card-title">
                            <a href="">Кнопки</a>
                          </div>
                          <div className="products__card-element">
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product__card-elemnet"></div>
                        </div>
                        <div className="products__card">
                          <div className="products__card-title">
                            <a href="">Кнопки</a>
                          </div>
                          <div className="products__card-element">
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{ display: "none" }}
                        className="menu__drop-products"
                      >
                        <div className="products__card">
                          <div className="products__card-title">
                            <a href="">Кнdddопки</a>
                          </div>
                          <div className="products__card-element">
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product__card-elemnet"></div>
                        </div>
                        <div className="products__card">
                          <div className="products__card-title">
                            <a href="">Кнопки</a>
                          </div>
                          <div className="products__card-element">
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                            <div className="products__card-submenu-wrap">
                              <div className="products__card-submenu-column">
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Кнопка вызова персонала T117
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Часы-пейджер TD108
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Беспроводной приемник-дисплей вызовов TD105
                                </a>
                                <a
                                  className="products__card-submenu-link"
                                  href="#"
                                >
                                  Смартфоны
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product__card-elemnet"></div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </p>
              </div>
            </div>
          </div>
          <div className="header__right">
            <nav className="header__menu menu">
              <ul className="menu__list">
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/about">О нас</Link>{" "}
                </li>
                <li>
                  <Link to="/question">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Блог</Link>
                </li>
                <li>
                  <Link to="/stock">Акции</Link>
                </li>
              </ul>
            </nav>
            <div className="header__verification">
              <div className="header__verification-reg">
                <Link onClick={() => handleClickButton1()} to="#">
                  Регистрация
                </Link>
              </div>
              <div className="header__verification-login">
                <Link onClick={() => handleClickButton2()} to="#">
                  Войти
                </Link>
              </div>
            </div>
            <div className="header__basket">
              <Link onClick={() => handleClickButton3()} to="#">
                <img src="/image/Header/Basket.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {buttonPressed == "button1" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <RegistrationForm />
        </Modal>
      )}
      {buttonPressed == "button2" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <LoginForm handleClickButton={handleClickButton1} />
        </Modal>
      )}
      {buttonPressed == "button3" && (
        <ModalRight active={modalActive} setActive={setModalActive}>
          <Basket/>
        </ModalRight>
      )}

      <ModalRight />
    </>
  );
}

export default Header;
