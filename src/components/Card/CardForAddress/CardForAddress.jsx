import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import api from "../../../api/api";
function CardForAddress({ id, country, city, zip, index }) {
  const handleClickDelete = async () => {
    try {
      await api.delete(`/deleteaddress/`, {
        data: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(id)
  return (
    <div className="address">
      <div className="address__list">
        <p>Страна: {country}</p>
      </div>
      <div className="address__list">
        <p>Город: {city}</p>
      </div>
      <div className="address__list">
        <p>Улица, дом, корпус, квартира: {zip}</p>
      </div>
      <div className="address__list">
        <p>Индекс: {index}</p>
      </div>
      <div className="address__list">
        <div className="address__close" onClick={() => handleClickDelete()}>
          &times;
        </div>
      </div>
    </div>
  );
}

export default CardForAddress;
