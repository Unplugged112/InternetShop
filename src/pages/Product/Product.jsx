import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import "./Product.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../redux/slice";
function Product() {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [product, setProduct] = React.useState([{}]);
  const idProduct = useParams();

  // const dispatch = useDispatch();
  // const id = idProduct.id;
  // const name = product.name_product;
  // const price = product.price_product;
  // const addToCartHandler = () => {
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       name,
  //       price,
  //       count,
  //     })
  //   );
  // };

  const getProduct = async () => {
    let response = await axios.get(
      `https://64131a923b710647375f8cac.mockapi.io/internetShop/Product/${idProduct.id}`
    );
    setProduct(response.data);
  };

  React.useEffect(() => {
    getProduct();
  }, []);
  const handleCountMinus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleCountPlus = () => {
    if (count < product.count_product) {
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
              <div className="main__product-title">{product.name_product}</div>
              <div className="main__product-characteristic">
                <div className="main__product-text">Краткое описание</div>
                <ul className="main__product-list">
                  {product.character_product &&
                    product.character_product.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
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
                  <button
                    // onClick={() => addToCartHandler()}
                    type="submit"
                    className="main__product-button"
                  >
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
                    {product.desc_product}
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
