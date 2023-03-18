import React from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import styles from "./Catalog.scss";
import axios from "axios";
function Catalog() {
  const [activeFilters, setActiveFilters] = React.useState(false);
  const [products, setProducts] = React.useState([{}]);

  const getProducts = async () => {
    let response = await axios.get(
      "https://64131a923b710647375f8cac.mockapi.io/internetShop/Product"
    );
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts()
  }, [])

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
                  title={obj.name_product}
                  price={obj.price_product}
                />
              ))}
          </div>
        </div>
      </main>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    </>
  );
}

export default Catalog;
