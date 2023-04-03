import React from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import "./PromotionProducts.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import Error from "../../components/Error/Error";
function PromotionProducts() {
  const [activeFilters, setActiveFilters] = React.useState(false);
  const [products, setProducts] = React.useState([{}]);
  const [categories, setCategories] = React.useState([]);
  const [manufacturers, setManufacturers] = React.useState([]);
  const [error, setError] = React.useState(null);
  const params = useParams().id;
  const getProducts = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/promotion/${params}`);
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const [value, setValue] = React.useState("");

  const filtredProducts = products.filter((country) => {
    return (
      country.name && country.name.toLowerCase().includes(value.toLowerCase())
    );
  });
  return (
    <>
      <main>
        <div className="main__container container">
          <div className="main__catalog-head ">
            <div className="main__catalog-title">
              <h3>Каталог</h3>
            </div>
            <Search setValue={setValue} />
            <div className="main__catalog-filters">
              <span onClick={() => setActiveFilters(true)}>Фильтры</span>
            </div>
          </div>

          <div className="main__catalog-cards">
            {products &&
              filtredProducts.map((obj) => (
                <Card
                  key={obj.id}
                  id={obj.id}
                  title={obj.name}
                  price={obj.price}
                  img={obj.img}
                  setError={setError}
                />
              ))}
          </div>
        </div>
      </main>
      <Error error={error} setError={setError} />
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        categoriesSearch={categories}
        manufacturersSearch={manufacturers}
        setCategoriesSearch={setCategories}
        setManufacturersSearch={setManufacturers}
        setProducts={setProducts}
      />
    </>
  );
}

export default PromotionProducts;
