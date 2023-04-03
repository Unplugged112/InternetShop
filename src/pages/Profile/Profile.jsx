import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import LogOutButton from "../../components/Button/LogOutButton/LogOutButton";
import "./Profile.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/ModalOnClick/Modal";
import ChangeSurname from "../../components/User/ChangeSurname/ChangeSurname";
import ChangeEmail from "../../components/User/ChangeEmail/ChangeEmail";
import ChangePhone from "../../components/User/ChangePhone/ChangePhone";
import ChangeUsername from "../../components/User/ChangeUsername/ChangeUsername";
import AddAddress from "../../components/User/AddAddress/AddAddress";
import api from "../../api/api";
import CardForAddress from "../../components/Card/CardForAddress/CardForAddress";

function Profile() {
  const [modalActive, setModalActive] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [address, setAddress] = useState([]);
  const [buttonPressed, setButtonPressed] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
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

  useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await api.get("/getaddress/");
        setAddress(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getAddress();
  }, []);

  // React.useEffect(() => {
  //   const getUserData = async () => {
  //     await api.get('/profile')
  //     .then(response => {
  //       setUser(response.data)
  //     })
  //     .catch(error => {
  //       console.error(error.data)
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //     })
  //     const token = Cookies.get("token");
  //     await axios
  //       .get("http://127.0.0.1:8000/profile/", {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         setUser(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error.message);
  //       });
  //   };

  //   getUserData();
  // }, []);

  const handleClickName = () => {
    setModalActive(true);
    setButtonPressed("name");
  };
  const handleClickSurname = () => {
    setModalActive(true);
    setButtonPressed("surname");
  };
  const handleClickEmail = () => {
    setModalActive(true);
    setButtonPressed("email");
  };
  const handleClickPhone = () => {
    setModalActive(true);
    setButtonPressed("phone");
  };
  const handleClickAddress = () => {
    setModalActive(true);
    setButtonPressed("address");
  };

  return (
    <>
      <main className="main">
        <div className="main__container container">
          <div className="account">
            {error ? (
              <div className="account__error">
                <p className="account__error-title">Вы не авторизованны</p>
                <p className="account__error-subtitle">
                  Чтобы увидеть профиль, авторизируйтесь
                </p>
              </div>
            ) : (
              <div className="account__wrapper">
                <div className="account__name flex">
                  <div className="input__row-account">
                    <div className="input__row-item">
                      <div className="input__row-wrapper">
                        <label htmlFor="firstname" className="input__label">
                          Имя
                        </label>
                        <div className="input__body">
                          <input type="text" id="firstname" value={user.name} />
                        </div>
                      </div>
                      <div className="input__row-change">
                        <Link onClick={() => handleClickName()}>
                          Изменить имя
                        </Link>
                      </div>
                    </div>
                    <div className="input__row-item">
                      <div className="input__row-wrapper">
                        <label htmlFor="lastname" className="input__label">
                          Фамилия
                        </label>
                        <div className="input__body">
                          <input
                            type="text"
                            id="lastname"
                            value={user.surname}
                          />
                        </div>
                        <div className="input__row-change">
                          <Link onClick={() => handleClickSurname()}>
                            Изменить фамилию
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account__email">
                  <div className="account__title">Электронная почта</div>
                  <div className="input__row-account">
                    <div className="input__row-item">
                      <div className="input__row-wrapper">
                        <label htmlFor="email" className="input__label">
                          Email
                        </label>
                        <div className="input__body">
                          <input type="text" id="email" value={user.email} />
                        </div>
                        <div className="input__row-change">
                          <Link onClick={() => handleClickEmail()}>
                            Изменить почту
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account__phone">
                  <div className="account__title">Телефон</div>
                  <div className="input__row-account">
                    <div className="input__row-item">
                      <div className="input__row-wrapper">
                        <label htmlFor="phone" className="input__label">
                          Телефон
                        </label>
                        <div className="input__body">
                          <input type="text" id="phone" value={user.phone} />
                        </div>
                        <div className="input__row-change">
                          <Link onClick={() => handleClickPhone()}>
                            Изменить телефон
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account__address">
                  <div className="account__title">Адрес</div>
                  <div className="input__row-account">
                    <div className="input__row-item">
                      <div className="input__row-wrapper">
                        <label htmlFor="address" className="input__label">
                          Адреса:
                        </label>
                        <div className="input__body">
                          {address &&
                            address.map((item) => (
                              <CardForAddress
                                key={item.id}
                                id={item.id}
                                country={item.country}
                                city={item.city}
                                zip={item.zip}
                                index={item.index}
                              />
                            ))}
                        </div>
                        <div className="input__row-change">
                          <Link onClick={() => handleClickAddress()}>
                            Добавить адрес
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <LogOutButton />
              </div>
            )}
          </div>
        </div>
      </main>
      {buttonPressed == "name" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ChangeUsername />
        </Modal>
      )}
      {buttonPressed == "surname" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ChangeSurname />
        </Modal>
      )}
      {buttonPressed == "email" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ChangeEmail />
        </Modal>
      )}
      {buttonPressed == "phone" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ChangePhone />
        </Modal>
      )}
      {buttonPressed == "address" && (
        <Modal active={modalActive} setActive={setModalActive}>
          <AddAddress userId={user} />
        </Modal>
      )}
    </>
  );
}

export default Profile;
