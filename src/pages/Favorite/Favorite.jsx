import React from "react";
import CardForFavorite from "../../components/Card/CardForFavorite/CardForFavorite";
import api from "../../api/api";
import "./Favorite.scss"
function Favorite() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    let response = await api.get(`/getfavorite/`);
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <main>
        <div className="main__container container">
          <div className="main__catalog-head ">
            <div className="main__catalog-title">
              <h3>Избранное</h3>
            </div>
          </div>

          <div className="main__catalog-cards">
            {products.length > 0 ? (
              products.map((obj) => (
                <CardForFavorite
                  key={obj.id}
                  id={obj.id}
                  rating={obj.rating}
                  title={obj.name}
                  price={obj.price}
                  img={obj.images[0]}
                />
              ))
            ) : (
              <div className="main__catalog-nothing">
                <h3>
                  Вы не добавлили ни одного товара в избранное
                </h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Favorite;
