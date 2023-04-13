import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import CategoryList from "./CategoryList/CategoryList";
import ProductList from "./ProductList/ProductList";
function MenuDrop() {
  const [category, setCategory] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [allPropducts, setAllPropducts] = React.useState("");

  const getCategory = async () => {
    let response = await api.get(`/category/`);
    setCategory(response.data);
  };
  React.useEffect(() => {
    if (selectedCategory) {
      api
        .get(`/filterProductsHeader/${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [selectedCategory, allPropducts]);

  function handleCategorySelect(categoryId) {
    setSelectedCategory(categoryId);
  }

  function handleAllProductsClick() {
    api
      .get(`/filterProductsHeader/all`)
      .then((response) => {
        setProducts(response.data);
      });
  }
  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="menu__drop">
      <div className="menu__drop-container container">
        <div className="menu__drop-list">
          <CategoryList
            category={category}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            selectedAllCategory={handleAllProductsClick}
          />
        </div>
        <div className="menu__drop-products">
          <div className="products__card">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDrop;
