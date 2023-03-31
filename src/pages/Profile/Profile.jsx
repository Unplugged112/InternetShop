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
import InputUsername from "../../components/User/Input/InputUsername/InputUsername";
function Profile() {
  const [modalActive, setModalActive] = React.useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
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
        setName(response.data.name);
        setSurname(response.data.surname);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  }, []);
  
  // const handleClickName = () => {
  //   setModalActive(true);
  //   setButtonPressed("name");
  // };



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
  return (
    <>
      <main className="main">
        <div className="main__container container">
          <div className="account">
            <div className="account__wrapper">
              <div className="account__name flex">
                <InputUsername firstname={name} lastname={surname} />
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
                        <input
                          type="text"
                          id="email"
                          value={name}
                          // onChange={handleEmailChange}
                        />
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
              {/* <div className="account__phone">
                <div className="account__title">Телефон</div>
                <div className="input__row-account">
                  <div className="input__row-item">
                    <div className="input__row-wrapper">
                      <label htmlFor="phone" className="input__label">
                        Телефон
                      </label>
                      <div className="input__body">
                        <input
                          type="text"
                          id="phone"
                          value={user.phone}
                          // onChange={handlePhoneChange}
                        />
                      </div>
                      <div className="input__row-change">
                        <Link onClick={() => handleClickPhone()}>
                          Изменить телефон
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="account__address">
                <div className="account__title">Адрес</div>
                <div className="input__row-account">
                  <div className="input__row-item">
                    <div className="input__row-wrapper">
                      <label htmlFor="address" className="input__label">
                        Адрес
                      </label>
                      <div className="input__body">
                        <input type="text" id="address" />
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
    </>
  );
}

export default Profile;
