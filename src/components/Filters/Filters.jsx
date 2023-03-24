import React from "react";
import "./Filter.scss";
import axios from "axios";
function Filters({
  activeFilters,
  setActiveFilters,
  categoriesSearch,
  manufacturersSearch,
  setCategoriesSearch,
  setManufacturersSearch,
}) {
  const [manufacturer, setManufacturer] = React.useState([]);
  const [category, setCategory] = React.useState([]);

  const getManufacturer = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/manufacturer/`);
    setManufacturer(response.data);
  };

  const getCategory = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/category/`);
    setCategory(response.data);
  };

  React.useEffect(() => {
    getCategory();
    getManufacturer();
  }, []);
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
                  <a href="">Все товары</a>
                </li>
                {category &&
                  category.map((obj) => (
                    <li key={obj.id}>
                      <label>
                        <input
                          name="category"
                          value={obj.id}
                          type="checkbox"
                          onChange={(e) => {
                            
                            if (e.target.checked) {
                              setManufacturersSearch([
                                ...manufacturersSearch,
                                e.target.value,
                              ]);
                            } else {
                              setManufacturersSearch(
                                manufacturersSearch.filter(
                                  (man) => man !== e.target.value
                                )
                              );
                            }
                          }}
                        />
                        {obj.name}
                      </label>
                    </li>
                  ))}
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
                  <a href="">Все</a>
                </li>
                {manufacturer &&
                  manufacturer.map((obj) => (
                    <li key={obj.id}>
                      <label>
                        <input
                          name="manufacturer"
                          value={obj.name}
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setCategoriesSearch([
                                ...categoriesSearch,
                                e.target.value,
                              ]);
                            } else {
                              setCategoriesSearch(
                                categoriesSearch.filter(
                                  (cat) => cat !== e.target.value
                                )
                              );
                            }
                          }}
                        />
                        {obj.name}
                      </label>
                    </li>
                  ))}
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
