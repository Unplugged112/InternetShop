import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function ChangeEmail() {
  const [email, SetEmail] = React.useState("");

  const handleChangeEmail = (event) => {
    SetEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("token");
      await axios.patch(
        "http://127.0.0.1:8000/update/",
        { email },
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
            <label htmlFor="email" className="change__label">
              Изменить почту
            </label>
            <input
              type="text"
              id="email"
              placeholder="Введите почту"
              value={email}
              onChange={handleChangeEmail}
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

export default ChangeEmail;
