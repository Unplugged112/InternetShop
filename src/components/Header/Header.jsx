import React from "react";
import Modal from "../Modal/ModalOnClick/Modal";
import styles from "./Header.scss";
import { Link } from "react-router-dom";
import RegistrationForm from "../User/RegistrationForm/RegistrationForm";
import LoginForm from "../User/LoginForm/LoginForm";
import ModalRight from "../Modal/Sidebar/Sidebar";
import Basket from "./Basket/Basket";
import Cookies from "js-cookie";
import axios from "axios";
import MenuDrop from "../MenuDrop/MenuDrop";
import api from "../../api/api";
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
  const [showHeader, setShowHeader] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await api.get("/profile/");
        setUser(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getUserProfile();
  }, []);
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

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setShowHeader(isVisible);
      setPrevScrollPos(currentScrollPos);
      if (currentScrollPos == 0) {
        header.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClickIcon = () => {
    setBurgerActive(!burgerActive);
    document.body.classList.add("lock");
  };

  if (burgerActive == false) {
    document.body.classList.remove("lock");
  }

  return (
    <>
      <header
        className={`header ${
          showHeader ? "header--visible" : "header--hidden"
        }`}
      >
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
                  <Link className="header__filters-link" to="/catalog/0">
                    Каталог
                  </Link>
                  <MenuDrop />
                </p>
              </div>
            </div>
          </div>
          <div className="header__right">
            <div
              className={burgerActive ? "menu__icon active" : "menu__icon"}
              onClick={() => handleClickIcon()}
            >
              <span></span>
            </div>
            <div
              className={burgerActive ? "header__body active" : "header__body"}
            >
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
              <div className="header__body-wrapper">
                {error ? (
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
                ) : (
                  <div className="header__profile">
                    <Link className="header__profile-link" to="/profile">
                      {user.name}
                    </Link>
                  </div>
                )}
                <div className="header__basket">
                  <div className="header__basket-link">
                    <Link to="favorite/">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                      </svg>
                    </Link>
                  </div>
                  <div className="header__basket-link">
                    <Link onClick={() => handleClickButton3()} to="#">
                      <img src="/image/Header/Basket.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
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
          <LoginForm
            handleClickButton={handleClickButton1}
            setActive={setModalActive}
          />
        </Modal>
      )}
      {buttonPressed == "button3" && (
        <ModalRight active={modalActive} setActive={setModalActive}>
          <Basket />
        </ModalRight>
      )}

      <ModalRight />
    </>
  );
}

export default Header;
