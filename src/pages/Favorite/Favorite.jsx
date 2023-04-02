import React from "react";
import CardForFavorite from "../../components/Card/CardForFavorite/CardForFavorite";
import axios from "axios";
import Cookies from "js-cookie";
function Favorite() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const token = Cookies.get("token")
    let response = await axios.get(`http://127.0.0.1:8000/getfavorite/`, {
      headers: { Authorization: `Token ${token}` },
    });
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts();
  }, [products]);
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
            {products &&
              products.map((obj) => (
                <CardForFavorite
                  key={obj.id}
                  favorite={products}
                  setFavorites={setProducts}
                  id={obj.id}
                  rating={obj.rating}
                  title={obj.name}
                  price={obj.price}
                  img={obj.img}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Favorite;
