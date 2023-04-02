import React from "react";
import "./Filter.scss";
import axios from "axios";
function Filters({ activeFilters, setActiveFilters, setProducts }) {
  const [manufacturer, setManufacturer] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = React.useState([]);
  const getManufacturer = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/manufacturer/`);
    setManufacturer(response.data);
  };

  const getCategory = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/category/`);
    setCategory(response.data);
  };
  async function handleFilter(event) {
    event.preventDefault();

    const result = await axios.get("http://127.0.0.1:8000/filter_products/", {
      params: {
        category: selectedCategories,
        manufacturer: selectedManufacturers,
      },
    });
    console.log(selectedCategories);
    console.log(selectedManufacturers);
    setProducts(result.data);
  }
  React.useEffect(() => {
    getCategory();
    getManufacturer();
  }, []);
  return (
    <div
      className={activeFilters ? "filters active" : "filters"}
      onClick={() => setActiveFilters(false)}
    >
      <form onSubmit={handleFilter} action="">
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
                  <a className="filters__list-link" href="">
                    Все товары
                  </a>
                </li>
                {category &&
                  category.map((obj) => (
                    <li key={obj.id}>
                      <label>
                        <input
                          name="category"
                          type="checkbox"
                          value={obj.id}
                          checked={selectedCategories.includes(obj.id)}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSelectedCategories([
                                ...selectedCategories,
                                obj.id,
                              ]);
                            } else {
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (name) => name !== obj.id
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
                  <a className="filters__list-link" href="">
                    Все
                  </a>
                </li>
                {manufacturer &&
                  manufacturer.map((obj) => (
                    <li key={obj.id}>
                      <label>
                        <input
                          name="manufacturer"
                          type="checkbox"
                          value={obj.id}
                          checked={selectedManufacturers.includes(
                            obj.id
                          )}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSelectedManufacturers([
                                ...selectedManufacturers,
                                obj.id,
                              ]);
                            } else {
                              setSelectedManufacturers(
                                selectedManufacturers.filter(
                                  (name) => name !== obj.id
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
              <button type="submit">Подтвердить</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
