import React, { useState, useEffect, useRef } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarField/StarField";
import api from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ImageMagnifier from "../../js/ImageMagnifier";
function Product() {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [product, setProduct] = React.useState([{}]);
  const idProduct = useParams();
  const [message, setMessage] = React.useState({});
  const id = idProduct.id;

  function reload() {
    window.location.reload();
  }
  const handleAddToCart = async (event) => {
    event.preventDefault();
    await api
      .post("/add_to_cart/", {
        id: id,
        quantity: count,
      })
      .then((response) => {
        setMessage(response.data);
        setTimeout(reload, 1000);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  const getProduct = async () => {
    await api.get(`/product/${idProduct.id}`).then((response) => {
      setProduct(response.data);
    });
  };

  React.useEffect(() => {
    getProduct();
  }, []);
  const handleCountMinus = () => {
    if (count >= 1) {
      setCount((prev) => parseInt(prev) - 1);
    }
  };

  const handleCountPlus = () => {
    if (count < product.count) {
      setCount((prev) => parseInt(prev) + 1);
    }
  };
  return (
    <main>
      <div className="main__container container">
        <form action="" onSubmit={handleAddToCart}>
          <div className="main__product-wrapper">
            <div className="main__product-element">
              <div className="main__product-swiper">
                <Swiper
                  loop={true}
                  modules={[Navigation, Pagination, Scrollbar]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  speed={700}
                >
                  {product.images &&
                    product.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <ImageMagnifier
                          width={"200px"}
                          src={`http://localhost:8000/` + img}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="main__product-elements">
                <div className="main__product-title">{product.name}</div>
                <div className="main__product-price">
                  <p className="price">{Math.round(product.price)}₽</p>
                  <p className="rating">
                    <StarRating rating={product.rating} />
                  </p>
                </div>
                <div className="main__product-characteristic">
                  <div className="main__product-text">Краткое описание</div>
                  <ul className="main__product-list">
                    {product.char &&
                      product.char.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="main__product-action action">
                  <div className="action__title">Количество</div>
                  <div className="action__counter">
                    <div
                      className="action__countre-plus"
                      onClick={() => handleCountPlus()}
                    >
                      &#43;
                    </div>
                    <div className="action__counter-count">
                      <input name="count" type="text" value={count} />
                    </div>
                    <div
                      className="action__counter-minus"
                      onClick={() => handleCountMinus()}
                    >
                      &#8722;
                    </div>
                  </div>
                </div>
                {product.count == 0 ? (
                  <div className="main__product-nostoce">
                    Товара нет в наличие
                  </div>
                ) : (
                  <div className="main__product-add">
                    <button className="main__product-button" type="submit">
                      Добавить в корзину
                    </button>
                  </div>
                )}

                {message && (
                  <div className="main__product-message">{message.message}</div>
                )}
                <div className="main__product-desc product__desc">
                  <div className="product__desc-element">
                    <div
                      className="product__desc-title"
                      onClick={() => setActive(!active)}
                    >
                      <div className="product__desc-text">Описание</div>
                      <div className="product__desc-arrow">
                        <img
                          src={
                            active
                              ? "/image/Product/active.svg"
                              : "/image/Product/unactive.svg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={
                        active
                          ? "product__desc-subtitle active"
                          : "product__desc-subtitle"
                      }
                    >
                      {product.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Product;
