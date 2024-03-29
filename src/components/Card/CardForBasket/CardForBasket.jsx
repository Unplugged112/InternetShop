import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import api from "../../../api/api";
function CardForBasket({ id, products, setProducts, name, img, count, price }) {
  const handleClickDelete = async () => {
    try {
      await api.delete("/removecart/", {
        data: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProducts(products.filter((item) => item.id !== id));

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sidebar__product">
      <div className="sidebar__product-right">
        <picture>
          <img src={`http://127.0.0.1:8000/${img}`} alt="" />
        </picture>
      </div>
      <div className="sidebar__product-left">
        <div className="sidebar__product-head">
          <div className="sidebar__product-name">{name}</div>
          <div className="sidebar__product-count">Количество: {count}</div>
        </div>
        <div className="sidebar__product-price">{Math.round(price)} ₽</div>
      </div>
      <div className="sidebar__product-delete" onClick={handleClickDelete}>
        &times;
      </div>
    </div>
  );
}

export default CardForBasket;
