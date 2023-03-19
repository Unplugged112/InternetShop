import React from "react";
import { useSelector } from "react-redux";
import "./Basket.scss";
function Basket() {
  const cartItems = useSelector((state) => state.addProduct.items);
  const total = useSelector((state) => state.addProduct.totalPrice);
  return (
    <>
      <div className="sidebar__head">
        <div className="sidebar__head-title">Корзина</div>
        <div className="sidebar__head-delete">Удалить все</div>
      </div>
      <div className="sidebar__body">
        {cartItems === <p>ddd</p> &&
          cartItems.map((item) => (
            <div className="sidebar__product">
              <div className="sidebar__product-right">
                <picture>
                  <img src="/image/Product/Image.png" alt="" />
                </picture>
              </div>
              <div className="sidebar__product-left">
                <div className="sidebar__product-head">
                  <div className="sidebar__product-name">{item.name}</div>
                  <div className="sidebar__product-count">
                    Количество: {item.count}
                  </div>
                </div>
                <div className="sidebar__product-price">{item.price}₽</div>
              </div>
            </div>
          )) }
      </div>

      <div className="sidebar__action">
        <button className="sidebar__button">
          Оформить заказ на <span>{total}₽</span>
        </button>
      </div>
    </>
  );
}

export default Basket;
