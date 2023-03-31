import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function ChangePhone() {
  const [phone, setPhone] = React.useState("");

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("token");
      await axios.patch(
        "http://127.0.0.1:8000/update/",
        { phone },
        { headers: { Authorization: `Token ${token}` } }
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="change">
      <div className="change__wrapper">
        <form onSubmit={handleSubmit} action="">
          <div className="change__input">
            <label htmlFor="phone" className="change__label">
              Изменить имя
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Введите телефон"
              value={phone}
              onChange={handleChangePhone}
            />
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
