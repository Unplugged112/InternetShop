import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function ChangeSurname() {
  const [surname, setSurname] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!surname) {
      setError("Фамилия не заполнена");
    } else {
      try {
        const token = Cookies.get("token");
        await axios.patch(
          "http://127.0.0.1:8000/update/",
          { surname },
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
            <label htmlFor="surname" className="change__label">
              Изменить имя
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Введите фамилию"
              value={surname}
              onChange={handleChangeSurname}
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

export default ChangeSurname;
