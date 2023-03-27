import React from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import styles from "./Catalog.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
function Catalog() {
  const [activeFilters, setActiveFilters] = React.useState(false);
  const [products, setProducts] = React.useState([{}]);
  const [categories, setCategories] = React.useState([]);
  const [manufacturers, setManufacturers] = React.useState([]);
  const getProducts = async () => {
    let response = await axios.get("http://127.0.0.1:8000/");
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  // React.useEffect(() => {
  //   async function fetchProducts() {
  //     const response = await fetch(
  //       `http://127.0.0.1:8000/filter_products/?category=${categories.join(
  //         "&category="
  //       )}&manufacturer=${manufacturers.join("&manufacturer=")}`
  //     );
  //     const data = await response.json();
  //     setProducts(data.products);
  //   }

  //   fetchProducts();
  // }, [categories, manufacturers]);

  return (
    <>
      <main>
        <div className="main__container container">
          <div className="main__catalog-head ">
            <div className="main__catalog-title">
              <h3>Каталог</h3>
            </div>
            <div className="main__catalog-filters">
              <span onClick={() => setActiveFilters(true)}>Фильтры</span>
            </div>
          </div>

          <div className="main__catalog-cards">
            {products &&
              products.map((obj) => (
                <Card
                  key={obj.id}
                  id={obj.id}
                  title={obj.name}
                  price={obj.price}
                  img={obj.img}
                />
              ))}
          </div>
        </div>
      </main>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        categoriesSearch={categories}
        manufacturersSearch={manufacturers}
        setCategoriesSearch={setCategories}
        setManufacturersSearch={setManufacturers}
      />
    </>
  );
}

export default Catalog;
