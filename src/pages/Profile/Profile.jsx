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
function Profile() {
  const [modalActive, setModalActive] = React.useState(false);
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  const [buttonPressed, setButtonPressed] = React.useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get("http://127.0.0.1:8000/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get(
          `http://127.0.0.1:8000/getaddress/${user.id}`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setAddress(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (user.id) {
      getAddress();
    }
  }, [user]);

  const handleClickDelete = async (id) => {
    try {
      const token = Cookies.get("token");
      await axios.delete(`http://127.0.0.1:8000/deleteaddress/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
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
                        <input type="text" id="lastname" value={user.surname} />
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
                            <div key={item.id} className="address">
                              <div className="address__list">
                                <p>Страна: {item.country}</p>
                              </div>
                              <div className="address__list">
                                <p>Город: {item.city}</p>
                              </div>
                              <div className="address__list">
                                <p>Улица, дом, корпус, квартира: {item.zip}</p>
                              </div>
                              <div className="address__list">
                                <p>Индекс: {item.index}</p>
                              </div>
                              <div className="address__list">
                                <div className="address__close" onClick={() => handleClickDelete(item.id)}>&times;</div>
                              </div>
                            </div>
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
