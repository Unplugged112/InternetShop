import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/ModalOnClick/Modal";
import LoginForm from "../../components/User/LoginForm/LoginForm";
import RegistrationForm from "../../components/User/RegistrationForm/RegistrationForm";
function Order() {
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
      <main className="main">
        <div className="main__container container">
          <div className="main__order-head">
            <div className="main__order-title">Оформление заказ</div>
          </div>
          <div className="main__order-body">
            <div className="not-registered">
              <div className="main__order-link">
                <span>
                  Чтобы продолжить покупку,{" "}
                  <Link onClick={() => handleClickButton2()}>
                    авторизуйтесь
                  </Link>
                </span>
              </div>
            </div>
            <div className="registered">
              <form action="">
                <div className="main__order-checkout checkout">
                  <div className="checkout__wrapper">
                    <div className="checkout__item">
                      <div className="checkout__title">1. Имя и фамилия</div>
                      <div className="checkout__input">
                        <div className="checkout__input-row input__row">
                          <div className="input__row-wrapper">
                            <label htmlFor="checkout-firstname">Имя</label>
                            <div className="input__row-body">
                              <input
                                name="checkout-firstname"
                                type="text"
                                placeholder="Введите имя"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="checkout__input-row input__row">
                          <div className="input__row-wrapper">
                            <label htmlFor="checkout-firstname">Фамилия</label>
                            <div className="input__row-body">
                              <input
                                name="checkout-secondname"
                                type="text"
                                placeholder="Введите фамилию"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout__item">
                      <h3 className="checkout__title">2. Адреса</h3>
                      <div className="checkout__address">
                        Сабитов Марат, ул Бибиревская, д 7, к 1, кв 2, г Москва,
                        г Москва, Россия, 127549
                      </div>
                      <div className="checkout__comment">
                        <textarea
                          name="checkout__textarea"
                          id=""
                          placeholder="Введите текст сообщения..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="checkout__item">
                      <div className="checkout__title">3. Способ оплаты</div>
                      <div className="checkout__radio">
                        <ul className="checkout__list">
                          <li>
                            <label>
                              Банковская карта
                              <input name="pay" type="radio" value="payture" />
                            </label>
                          </li>
                          <li>
                            <label>
                              Банковская карта, при получении
                              <input name="pay" type="radio" value="cod_card" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="checkout__item">
                      <button className="checkout__btn">
                        Перейти к оплате
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
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
    </>
  );
}

export default Order;
