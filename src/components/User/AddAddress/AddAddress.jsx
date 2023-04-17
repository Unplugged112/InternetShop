import React from "react";
import api from "../../../api/api";
import "./AddAddress.scss";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
function AddAddress() {
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [index, setIndex] = React.useState("");
  const [query, setQuery] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/address/", {
        city: city,
        zip: zip,
        country: country,
        index: index,
        address: query.unrestricted_value,
      });
      setTimeout(reload, 1000);
    } catch (error) {
      console.error(error);
    }
    function reload() {
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
                <AddressSuggestions
                  token="5895709161e578f0ea5e5bed6d848425a75522e9"
                  value={query}
                  onChange={setQuery}
                />
              </li>
              {/* <li>
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
              </li> */}
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
