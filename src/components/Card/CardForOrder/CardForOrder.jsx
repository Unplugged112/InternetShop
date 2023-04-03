import React from "react";
import "./CardForOrder.scss";
function CardForOrder({ img, name, quantity, price }) {
  return (
    <div className="order__right-product">
      <div className="order__right-img">
        <img src={`http://127.0.0.1:8000/${img}`} alt="" />
      </div>
      <div className="order__right-body">
        <div className="order__right-title">{name}</div>
        <div className="order__right-quality">
          Количество: <span>{quantity}</span>
        </div>
      </div>
      <div className="order__right-price">
        <span>{price} ₽</span>
      </div>
    </div>
  );
}

export default CardForOrder;
