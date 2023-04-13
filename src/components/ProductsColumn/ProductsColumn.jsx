import React from "react";
import { Link } from "react-router-dom";
import "./ProductsColumn.scss"
function ProductsColumn({ lastProducts }) {
  const leftColumnProducts = lastProducts.slice(0, 2);
  const rightColumnProducts = lastProducts.slice(2);
  return (
    <>
      <div className="product__element-left">
        {lastProducts &&
          leftColumnProducts.map((obj) => (
            <div className="product__element-card ">
              <div className="product__element-description description">
                <div className="description__title">
                  {obj.category.name_category}
                </div>
                <div className="description__name">{obj.name_product}</div>
                <div className="description__text">{obj.desc_product}</div>
                <div className="description__action">
                  <Link
                    className="description__link"
                    to={`http://localhost:3000/product/${obj.id}`}
                  >
                    <span>Перейти</span>
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.96028 6.14228C7.17996 6.36196 7.17996 6.71806 6.96028 6.93773L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4074C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.6119L5.23671 6.54001L0.164756 1.46806C-0.0549186 1.24838 -0.0549186 0.89228 0.164756 0.672606L0.429956 0.407406C0.649631 0.187731 1.00573 0.187731 1.22541 0.407406L6.96028 6.14228Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="product__element-img">
                <img
                  src={`http://127.0.0.1:8000/${obj.img_product_url}`}
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>

      {lastProducts &&
        rightColumnProducts.map((obj) => (
          <div className="product__element-right">
            <div className="element__right-title">
              <div className="element__right-text">
                {obj.category.name_category}
              </div>
              <div className="element__right-name">{obj.name_product}</div>
              <div className="element__right-desc">{obj.desc_product}</div>
              <div className="description__action">
                <Link
                  className="description__link"
                  to={`http://localhost:3000/product/${obj.id}`}
                >
                  <span>Перейти</span>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.96028 6.14228C7.17996 6.36196 7.17996 6.71806 6.96028 6.93773L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4074C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.6119L5.23671 6.54001L0.164756 1.46806C-0.0549186 1.24838 -0.0549186 0.89228 0.164756 0.672606L0.429956 0.407406C0.649631 0.187731 1.00573 0.187731 1.22541 0.407406L6.96028 6.14228Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="element__right-img">
              <img
                src={`http://127.0.0.1:8000/${obj.img_product_url}`}
                alt=""
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductsColumn;
