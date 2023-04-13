import React from "react";
import api from "../../../api/api";
import InputMask from "react-input-mask";
function ChangePhone() {
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone) {
      setError("Телефон не заполнен");
    } else {
      try {
        await api.patch("/update/", { phone });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="change">
      <div className="change__wrapper">
        <form onSubmit={handleSubmit} action="">
          <div className="change__input">
            <label htmlFor="phone" className="change__label">
              Изменить телефон
            </label>
            <InputMask
              mask="+7(999)999-99-99"
              type="text"
              id="phone"
              placeholder="Введите телефон"
              value={phone}
              onChange={handleChangePhone}
            ></InputMask>
            <div className="error fs12">{error}</div>
            <button type="submit" className="change__button">
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePhone;
