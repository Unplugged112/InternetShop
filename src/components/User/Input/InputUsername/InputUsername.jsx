import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function InputUsername({ firstname, lastname }) {
  const [username, setUsername] = React.useState(firstname);
  const [surname, setSurname] = React.useState(lastname);

  const handleChangeName = async (e) => {
    setUsername(e.target.value);
    try {
      const token = Cookies.get("token");
      await axios.patch(
        "http://127.0.0.1:8000/update/",
        { username: e.target.value },
        { headers: { Authorization: `Token ${token}` } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSurname = async (e) => {
    setSurname(e.target.value);
    try {
      const token = Cookies.get("token");
      await axios.patch(
        "http://127.0.0.1:8000/update/",
        { surname: e.target.value },
        { headers: { Authorization: `Token ${token}` } }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
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
              onChange={handleChangeName}
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
              onChange={handleChangeSurname}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputUsername;
