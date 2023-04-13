import React from "react";
import api from "../../../api/api";
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
        await api.patch(
          "/update/",
          { surname },
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
