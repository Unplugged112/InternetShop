import React from 'react'
import Swiper from '../../components/Swiper/Swiper';
import styles from "./Homepage.scss"
function Homepage() {
  return (
    <main className="page">
      <div className="page__container container">
        <div className="page__slider slider">
          <div className="slider__body">
            <Swiper />
          </div>
          <div className="slider__button">
            <a href="" className="slider__button-link">
              Все акции
            </a>
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
              <a href="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="cards__element">
            <div className="cards__image">
              <img src="/image/Cards/Image.png" alt="" />
            </div>
            <div className="cards__title">О нас</div>
            <div className="cards__description">О нас</div>
            <div className="cards__action">
              <a href="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="cards__element">
            <div className="cards__image">
              <img src="/image/Cards/Image.png" alt="" />
            </div>
            <div className="cards__title">О нас</div>
            <div className="cards__description">О нас</div>
            <div className="cards__action">
              <a href="" className="cards__link">
                <span>Перейти</span>
                <img src="/image/Cards/Arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;