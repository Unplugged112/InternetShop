import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Basket.scss";
import Cookies from "js-cookie";
import CardForBasket from "../../Card/CardForBasket/CardForBasket";
import axios from "axios";
function Basket() {
  const [products, setProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const getProducts = async () => {
    const token = Cookies.get("token");
    let response = await axios.get(`http://127.0.0.1:8000/cart/`, {
      headers: { Authorization: `Token ${token}` },
    });
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
                img={item.img}
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
