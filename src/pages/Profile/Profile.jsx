import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import LogOutButton from "../../components/Button/LogOutButton/LogOutButton";
import "./Profile.scss"
import SlidebarMenu from "../../components/SlidebarMenu/SlidebarMenu";
import { useRef } from "react";
function Profile() {
  const [username, setUsername] = useState(
    JSON.parse(Cookies.get("user")).name
  );
  const [surname, setSurname] = useState(
    JSON.parse(Cookies.get("user")).surname
  );
  const [email, setEmail] = useState(JSON.parse(Cookies.get("user")).email);
  const [phone, setPhone] = useState(JSON.parse(Cookies.get("user")).phone);
  const [activeSection, setActiveSection] = useState(null);
  const contentRef = useRef(null);
  
  const data = JSON.parse(Cookies.get("user"));

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
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
                      <input
                        type="text"
                        id="firstname"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
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
                        value={surname}
                        onChange={handleSurnameChange}
                      />
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
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
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
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
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
  );
}

export default Profile;
