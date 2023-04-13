import React from "react";
import "./ChangeUsername.scss";
import api from "../../../api/api";
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
        await api.patch(
          "/update/",
          { username },
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
