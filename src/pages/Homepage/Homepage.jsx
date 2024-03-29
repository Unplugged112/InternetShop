import React from "react";
import { Link } from "react-router-dom";
import Swiper from "../../components/Swiper/Swiper";
import "./Homepage.scss";
import Contacts from "../../components/Form/Contacts/Contacts";
import ProductsColumn from "../../components/ProductsColumn/ProductsColumn";
import api from "../../api/api";
function Homepage() {
  const [category, setCategory] = React.useState([]);
  const [lastProducts, setLastProducts] = React.useState([]);

  const getLastProducts = async () => {
    let response = await api.get(`/latestProducts/`);
    setLastProducts(response.data);
  };

  const getCategoris = async () => {
    let response = await api.get(`/category/`);
    setCategory(response.data);
  };

  React.useEffect(() => {
    getCategoris();
    getLastProducts();
  }, []);

  return (
    <main className="page">
      <div className="page__container container">
        <div className="page__slider slider">
          <div className="slider__body">
            <Swiper />
          </div>
          <div className="slider__button">
            <Link to="/stock" className="slider__button-link">
              Все акции
            </Link>
          </div>
        </div>
        <div className="main__cards cards">
          <div className="cards__element">
            <div className="cards__image">
              <img src="/image/Cards/Image.png" alt="" />
            </div>
            <div className="cards__title">О нас</div>
            <div className="cards__description">О нас</div>
            <div className="cards__action">
              <Link to="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="cards__element">
            <div className="cards__image">
              <img src="/image/Cards/Image.png" alt="" />
            </div>
            <div className="cards__title">О нас</div>
            <div className="cards__description">О нас</div>
            <div className="cards__action">
              <Link to="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="cards__element">
            <div className="cards__image">
              <img src="/image/Cards/Image.png" alt="" />
            </div>
            <div className="cards__title">О нас</div>
            <div className="cards__description">О нас</div>
            <div className="cards__action">
              <Link to="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="popular__products">
          <div className="main__head">
            <div className="main__head-title">Последние поступления</div>
            <div className="main__head-subtitle">
              Наши новинки, которые вы можете приобрести прямо сейчас
            </div>
          </div>
          <div className="popular__products-product ">
            <ProductsColumn lastProducts={lastProducts} />
          </div>
          <div className="popular__products-button">
            <Link to="/catalog/0">Все товары</Link>
          </div>
        </div>
      </div>
      <div className="main__category">
        <div className="main__ctaegory-container container">
          <div className="main__head">
            <div className="main__head-title white">Категории</div>
            <div className="main__head-subtitle white">
              Мы вывели Вам уникальный, удобный и понятный список товаров
            </div>
          </div>
          <div className="main__category-elements elements">
            {category.map((obj) => (
              <div key={obj.id} className="elements__card">
                <div className="elements__card-img">
                  <img src={`http://localhost:8000/` + obj.img} alt="" />
                </div>
                <div className="elements__card-button">
                  <Link to={`catalog/` + obj.id}>{obj.name}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="popular__products-button">
            <Link to="/catalog/0">Все товары</Link>
          </div>
        </div>
      </div>

      <div className="main__container container">
        <div className="main__wrapper">
          <Contacts />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
