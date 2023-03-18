import React from "react";
import "./FullBasket.scss";
// import { useSelector } from "react-redux";
function FullBasket() {
  // const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="main__basket-element">
      <div className="main__basket-product product">
        <div className="product__image">
          <img src="/image/Product/Image.png" alt="" />
        </div>
        <div className="product__description">
          <div className="product__description-head">
            <div className="product__description-title"></div>
            <div className="product__description-price">
              <span>Цена: </span>
            </div>
            <div className="product__description-count">
              <span>Количество: 2</span>
              <span>шт.</span>
            </div>
          </div>

          <div className="product__description-action">
            <div className="product__description-delete">
              <button>Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main__basket-action">
        <div className="main__basket-buy">
          <button>Оплатить</button>
        </div>
      </div>
    </div>
  );
}

export default FullBasket;
