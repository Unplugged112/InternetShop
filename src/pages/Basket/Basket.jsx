import React from "react";
import EmptyBasket from "../../components/FullBasket/FullBasket";
import FullBasket from "../../components/EmptyBasket/EmptyBasket";
import "./Basket.scss";
function Basket() {
  const a = true;
  return (
    <main className="main">
      <div className="main__header">
        <div className="main__header-container container">
          <div className="main__header-title">Корзина</div>
        </div>
      </div>

      <div className="main__basket-wrapper">
        <div className="main__basket-container container">
          {a ? <EmptyBasket /> : <FullBasket />}
        </div>
      </div>
    </main>
  );
}

export default Basket;
