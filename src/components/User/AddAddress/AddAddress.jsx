import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./AddAddress.scss";
function AddAddress() {
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [index, setIndex] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("token");
      await axios.post(
        "http://127.0.0.1:8000/address/",
        {
          city: city,
          zip: zip,
          country: country,
          index: index,
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      setTimeout(reload, 1000)
    } catch (error) {
      console.error(error);
    }
	 function reload(){
		window.location.reload();
	 }
  };

  return (
    <div className="add">
      <div className="add__wrapper">
        <div className="add__title">Добавьте адрес</div>
        <div className="add__body">
          <form onSubmit={handleSubmit} action="">
            <ul className="add__body-list">
              <li>
                <label className="add__body-label">
                  <input
                    type="text"
                    placeholder="Введите страну"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label className="add__body-label">
                  <input
                    type="text"
                    placeholder="Введите город"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label className="add__body-label">
                  <input
                    type="text"
                    placeholder="Введите улицу, дом, корпус, квартиру"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label className="add__body-label">
                  <input
                    type="text"
                    placeholder="Введите индекс"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <button className="add__button" type="submit">
                  Добавить адрес
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
