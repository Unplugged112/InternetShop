import React from "react";
import { Link } from "react-router-dom";

import StarRating from "../../StarField/StarField";
import axios from "axios";
import Cookies from "js-cookie";
function CardForFavorite({ favorites, setFavorites, id, rating, title, price, img }) {
  const handleClickDelete = async () => {
    try {
      const token = Cookies.get("token");
      await axios.delete("http://127.0.0.1:8000/deletefavorite/", {
        data: {
          id: id,
        },
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      });
      setFavorites(favorites.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="product-card">
      <div className="product-card__delete" onClick={() => handleClickDelete()}>
        &times;
      </div>
      <div className="product-card__image">
        <img src={`http://127.0.0.1:8000/${img}`} alt={title} />
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{title}</div>
        <div className="product-card__rating">
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="product-card-buy">
        <div className="product-card__price">{price}&nbsp;₽</div>
        <div className="product-card__actions">
          <Link to={`/product/${id}`} className="product-card__buy-button">
            Купить
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardForFavorite;
