import React from "react";
import { Link } from "react-router-dom";
import "./Basket.scss";
import api from "../../../api/api";
import CardForBasket from "../../Card/CardForBasket/CardForBasket";
function Basket() {
  const [products, setProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const getProducts = async () => {
    let response = await api.get(`http://127.0.0.1:8000/cart/`);
    setProducts(response.data);
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].price;
    }
    return totalPrice;
  };

  React.useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [products]);

  return (
    <>
      <div className="sidebar__head">
        <div className="sidebar__head-title">Корзина</div>
        <div className="sidebar__head-delete">Удалить все</div>
      </div>
      {products.length == 0 ? (
        <div className="sidebar__body">
          Вы не добавили ни одного товара в корзину
        </div>
      ) : (
        <div className="sidebar__body">
          {products &&
            products.map((item) => (
              <CardForBasket
                key={item.id}
                id={item.id}
                products={products}
                setProducts={setProducts}
                name={item.name}
                price={item.price}
                img={item.images[0]}
                count={item.quantity}
              />
            ))}
        </div>
      )}
      {products.length == 0 ? (
        <div className="div"></div>
      ) : (
        <div className="sidebar__action">
          <Link to="order">
            <button className="sidebar__button">
              Оформить заказ на <span>{totalPrice}₽</span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Basket;
