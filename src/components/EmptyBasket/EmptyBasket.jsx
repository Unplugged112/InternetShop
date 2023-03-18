import React from "react";
import "./EmptyBasket.scss";
import { Link } from "react-router-dom";
function EmptyBasket() {
  return (
    <div className="main__basket-element">
      <div className="main__basket-text">
        Вы пока что еще ничего не добавили в корзину
      </div>
      <div className="main__basket-return">
        <Link to="/catalog">Перейти к товарам</Link>
      </div>
    </div>
  );
}

export default EmptyBasket;
