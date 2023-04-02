import React from "react";
import "./ChangeUsername.scss";
import axios from "axios";
import Cookies from "js-cookie";
function ChangeUsername() {
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      setError("Имя не заполнено");
    } else {
      try {
        const token = Cookies.get("token");
        await axios.patch(
          "http://127.0.0.1:8000/update/",
          { username },
          { headers: { Authorization: `Token ${token}` } }
        );
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
            <label htmlFor="name" className="change__label">
              Изменить имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Введите имя"
              value={username}
              onChange={handleChangeUsername}
            />
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

export default ChangeUsername;
