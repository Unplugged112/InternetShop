import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import styles from "./Product.scss";
function Product() {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleCountMinus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleCountPlus = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <main>
      <div className="main__container container">
        <div className="main__product-wrapper">
          <div className="main__product-element">
            <div className="main__product-swiper">123</div>
            <div className="main__product-elements">
              <div className="main__product-title">
                Кнопка вызова персонала Т117
              </div>
              <div className="main__product-characteristic">
                <div className="main__product-text">Краткое описание</div>
                <ul className="main__product-list">
                  <li>Характеристики</li>
                  <li>Характеристики</li>
                  <li>Характеристики</li>
                </ul>
              </div>
              <form action="">
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
                <div className="main__product-add">
                  <button type="submit" className="main__product-button">
                    Добавить в корзину
                  </button>
                </div>
              </form>
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
                    Текст.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
