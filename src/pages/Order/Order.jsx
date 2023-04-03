import React from "react";
import "./Order.scss";
import api from "../../api/api";
import CardForOrder from "../../components/Card/CardForOrder/CardForOrder";
function Order() {
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [errorAddress, setErrorAddress] = React.useState(null);
  const [address, setAddress] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [comment, setComment] = React.useState("")
  React.useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await api.get("/profile/");
        setUser(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getUserProfile();
  }, []);

  React.useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await api.get("/getaddress/");
        setAddress(response.data);
      } catch (error) {
        setErrorAddress(error);
      }
    };
    getAddress();
  }, []);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/cart/");
        setProducts(response.data);
      } catch (error) {
        setErrorAddress(error);
      }
    };
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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/addorder/", {
        idAddress:selectedValue,
        totalPrice: totalPrice,
        comment: comment,
        items: products,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  const handleChangeTextArea = (e) => {
    setComment(e.target.value)
  }

  return (
    <>
      {error ? (
        <main className="main">
          <div className="main__container container">
            <div className="main__order-error">
              <div className="main__order-text">
                Чтобы оформить заказ, авторизируйтесь
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="main">
          <div className="main__container container">
            <div className="main__order-head">
              <div className="main__order-title">Оформление заказ</div>
            </div>
            <form action="" onSubmit={handleOnSubmit}>
              <div className="main__order-body">
                <div className="main__order-left">
                  <div className="main__order-checkout checkout">
                    <div className="checkout__wrapper">
                      <div className="checkout__item">
                        <div className="checkout__title">1. Имя и фамилия</div>
                        <div className="checkout__input">
                          <div className="checkout__input-row input__row">
                            <div className="input__row-wrapper">
                              <label htmlFor="checkout-firstname">Имя</label>
                              <div className="input__row-body">
                                <input
                                  name="checkout-firstname"
                                  type="text"
                                  placeholder="Введите имя"
                                  value={user.name}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="checkout__input-row input__row">
                            <div className="input__row-wrapper">
                              <label htmlFor="checkout-firstname">
                                Фамилия
                              </label>
                              <div className="input__row-body">
                                <input
                                  name="checkout-secondname"
                                  type="text"
                                  placeholder="Введите фамилию"
                                  value={user.surname}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout__item">
                        <div className="checkout__title">
                          2. Email и телефон
                        </div>
                        <div className="checkout__input">
                          <div className="checkout__input-row input__row">
                            <div className="input__row-wrapper">
                              <label htmlFor="checkout-email">Email</label>
                              <div className="input__row-body">
                                <input
                                  name="checkout-email"
                                  type="text"
                                  placeholder="Введите email"
                                  value={user.email}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="checkout__input-row input__row">
                            <div className="input__row-wrapper">
                              <label htmlFor="checkout-phone">Телефон</label>
                              <div className="input__row-body">
                                <input
                                  name="checkout-phone"
                                  type="text"
                                  placeholder="Введите телефон"
                                  value={user.phone}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout__item">
                        <h3 className="checkout__title">3. Адреса</h3>
                        <div className="checkout__address">
                          <select
                            name="address"
                            id=""
                            value={selectedValue}
                            onChange={handleChange}
                            className="checkout__address-select"
                          >
                            <option>Выберите адрес</option>
                            {address &&
                              address.map((item) => (
                                <option key={item.id} value={item.id}>
                                  <div className="checkout__address-body">
                                    <div className="checkout__address-list">
                                      <p>Страна: {item.country}</p>
                                    </div>
                                    <div className="checkout__address-list">
                                      <p>Город: {item.city}</p>
                                    </div>
                                    <div className="checkout__address-list">
                                      <p>
                                        Улица, дом, корпус, квартира: {item.zip}
                                      </p>
                                    </div>
                                    <div className="checkout__address-list">
                                      <p>Индекс: {item.index}</p>
                                    </div>
                                  </div>
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="checkout__comment">
                          <textarea
                            name="checkout__textarea"
                            value={comment}
                            onChange={handleChangeTextArea}
                            placeholder="Введите текст сообщения..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="checkout__item">
                        <button className="checkout__btn" type="submit">
                          Перейти к оплате
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main__order-right order__right">
                  <div className="order__right-wrapper">
                    <div className="order__right-products">
                      {products &&
                        products.map((obj) => (
                          <CardForOrder
                            key={obj.id}
                            img={obj.img}
                            name={obj.name}
                            quantity={obj.quantity}
                            price={obj.price}
                          />
                        ))}
                    </div>
                    <div className="order__right-total">
                      <span>Итого</span> <span>{totalPrice}₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
}

export default Order;
