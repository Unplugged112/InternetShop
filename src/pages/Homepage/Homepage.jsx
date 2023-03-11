import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import styles from "./Homepage.scss";
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

        <div className="popular__products">
          <div className="main__head">
            <div className="main__head-title">Популярные товары</div>
            <div className="main__head-subtitle">
              Наши товары, которые пользуются наибольшим спросом
            </div>
          </div>
          <div className="popular__products-product product">
            <div className="product__element-left">
              <div className="product__element-card ">
                <div className="product__element-description description">
                  <div className="description__title">
                    Система вызова персонала
                  </div>
                  <div className="description__name">
                    Кнопка вызова персонала T117
                  </div>
                  <div className="description__text">
                    Лучшее устройство для помощи и оповещения персонала
                    различных свер обслуживания
                  </div>
                  <div className="description__action">
                    <a className="description__link" href="">
                      <span>Перейти</span>
                      <svg
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.96028 6.14228C7.17996 6.36196 7.17996 6.71806 6.96028 6.93773L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4074C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.6119L5.23671 6.54001L0.164756 1.46806C-0.0549186 1.24838 -0.0549186 0.89228 0.164756 0.672606L0.429956 0.407406C0.649631 0.187731 1.00573 0.187731 1.22541 0.407406L6.96028 6.14228Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product__element-img">
                  <img src="/image/Popular/Button.png" alt="" />
                </div>
              </div>
              <div className="product__element-card ">
                <div className="product__element-description description">
                  <div className="description__title">
                    Система вызова персонала
                  </div>
                  <div className="description__name">
                    Кнопка вызова персонала T117
                  </div>
                  <div className="description__text">
                    Лучшее устройство для помощи и оповещения персонала
                    различных свер обслуживания
                  </div>
                  <div className="description__action">
                    <a className="description__link" href="">
                      <span>Перейти</span>
                      <svg
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.96028 6.14228C7.17996 6.36196 7.17996 6.71806 6.96028 6.93773L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4074C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.6119L5.23671 6.54001L0.164756 1.46806C-0.0549186 1.24838 -0.0549186 0.89228 0.164756 0.672606L0.429956 0.407406C0.649631 0.187731 1.00573 0.187731 1.22541 0.407406L6.96028 6.14228Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product__element-img">
                  <img src="/image/Popular/Watch.png" alt="" />
                </div>
              </div>
            </div>
            <div className="product__element-right">
              <div className="element__right-title">
                <div className="element__right-text">
                  Система вызова персонала
                </div>
                <div className="element__right-name">
                  Беспроводной приемник-дисплей вызовов TD105
                </div>
                <div className="element__right-desc">
                  Дисплей имеет стабильную функцию беспроводных вызовов, может
                  выполнять многоканальные вызовы, до 999 способов.
                </div>
                <div className="description__action">
                  <a className="description__link" href="">
                    <span>Перейти</span>
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.96028 6.14228C7.17996 6.36196 7.17996 6.71806 6.96028 6.93773L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4074C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.6119L5.23671 6.54001L0.164756 1.46806C-0.0549186 1.24838 -0.0549186 0.89228 0.164756 0.672606L0.429956 0.407406C0.649631 0.187731 1.00573 0.187731 1.22541 0.407406L6.96028 6.14228Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="element__right-img">
                <img src="/image/Popular/Display.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
