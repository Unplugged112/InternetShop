import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Card.scss"
function Card({id, title, price, img}) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={`http://127.0.0.1:8000/${img}`} alt="" />
      </div>
      <div className="card__text">
        <div className="card__text-name">{title}</div>
        <div className="card__text-price">{price} руб.</div>
      </div>
      <div className="card__action">
        <Link to={`/product/${id}`} className="card__action-button">
          Купить
        </Link>
      </div>
    </div>
  );
}

export default Card