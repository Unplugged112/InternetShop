import React from "react";
import "./Filter.scss";
function Filters({ activeFilters, setActiveFilters }) {
  return (
    <div
      className={activeFilters ? "filters active" : "filters"}
      onClick={() => setActiveFilters(false)}
    >
      <form action="">
        <div className="filters__content" onClick={(e) => e.stopPropagation()}>
          <div className="filters__close">
            <div
              className="filters__close-element"
              onClick={() => setActiveFilters(false)}
            >
              &#x2715;
            </div>
          </div>

          <div className="filters__elements">
            <div className="filters__element">
              <div className="filters__title">Фильтры</div>
              <ul className="filters__list">
                <li>
                  <label>
                    <input name="all-products" value="all" type="checkbox" />
                    Все товары
                  </label>
                </li>
              </ul>
            </div>
            <div className="filters__element">
              <div className="filters__title">Наличие</div>
              <ul className="filters__list">
                <li>
                  <label>
                    <input
                      name="available"
                      id="contactChoice1"
                      type="radio"
                      value="yes"
                    />
                    Есть в наличие
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="available"
                      id="contactChoice2"
                      type="radio"
                      value="no"
                    />
                    Нет в наличие
                  </label>
                </li>
              </ul>
            </div>
            <div className="filters__element">
              <div className="filters__title">Производитель</div>
              <ul className="filters__list">
                <li>
                  <label>
                    <input
                      name="all-manufacturers"
                      value="all"
                      type="checkbox"
                    />
                    Все
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="filters__action">
            <div className="filters__clear">
              <span>Очистить все</span>
            </div>

            <div className="filters__confirm">
              <button>Подтвердить</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
