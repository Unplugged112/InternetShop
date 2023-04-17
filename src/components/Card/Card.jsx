import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import StarRating from "../StarField/StarField";
import { Rating } from "@material-ui/lab";
import api from "../../api/api";
function Card({ id, rating, title, price, img, setError }) {
  const handleClickFavorite = async () => {
    try {
      await api.post("/addfavorite/", {
        id: id,
      });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={`http://127.0.0.1:8000/${img}`} alt={title} />
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{title}</div>
        <div className="product-card__rating">
          
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
      <div className="product-card-buy">
        <div className="product-card__price">{Math.round(price)}&nbsp;₽</div>
        <div className="product-card__actions">
          <Link
            className="product-card__favorite-button"
            onClick={() => handleClickFavorite()}
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>
          </Link>
          <Link to={`/product/${id}`} className="product-card__buy-button">
            Купить
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
