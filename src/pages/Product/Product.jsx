import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import "./Product.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../../components/StarField/StarField";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/AddCartSlice/cartSlice";

function Product() {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [product, setProduct] = React.useState([{}]);
  const idProduct = useParams();

  const dispatch = useDispatch();
  const id = idProduct.id;
  const name = product.name;
  const price = product.price;
  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        id,
        name,
        price,
        count,
      })
    );
  };

  const getProduct = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/product/${idProduct.id}`
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
    if (count < product.count) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <main>
      <div className="main__container container">
        <div className="main__product-wrapper">
          <div className="main__product-element">
            <div className="main__product-swiper">
              <img src={`http://127.0.0.1:8000/${product.img}`} alt="" />
            </div>
            <div className="main__product-elements">
              <div className="main__product-title">{product.name}</div>
              <div className="main__product-price">
                <p className="price">{product.price}₽</p>
                <p className="rating">
                  <StarRating rating={product.raiting} />
                </p>
              </div>
              <div className="main__product-characteristic">
                <div className="main__product-text">Краткое описание</div>
                <ul className="main__product-list">
                  {/* {product.character_product &&
                    product.character_product.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))} */}
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
                  <div
                    onClick={() => addToCartHandler()}
                    className="main__product-button"
                  >
                    Добавить в корзину
                  </div>
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
                    {product.desc}
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
