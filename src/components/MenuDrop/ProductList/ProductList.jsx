import React from "react";
import { Link } from "react-router-dom";
function ProductList({ products}) {

  return (
    <div className="products__card-element">
      <div className="products__card-submenu-wrap">
        <div className="products__card-submenu-column">
          {products.map((product) => (
            <Link key={product.id} className="products__card-submenu-link" to={`product/${product.id}`}>
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
