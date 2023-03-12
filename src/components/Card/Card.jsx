import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Card.scss"
function Card() {
  return (
    <div className="card">
      <div className="card__image">
        <img src="/image/Product/Image.png" alt="" />
      </div>
      <div className="card__text">
        <div className="card__text-name">Наименования</div>
        <div className="card__text-price">100 руб.</div>
      </div>
      <div className="card__action">
        <Link to='/product/1' className="card__action-button">Купить</Link>
      </div>
    </div>
  );
}

export default Card