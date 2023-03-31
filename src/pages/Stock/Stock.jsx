import React from "react";
import { Link } from "react-router-dom";
import "./Stock.scss";
import axios from "axios";
function Stock() {
  const [promo, setPromo] = React.useState([]);
  const getPromt = async () => {
    let response = await axios.get("http://localhost:8000/promo/");
    setPromo(response.data);
  };

  React.useEffect(() => {
    getPromt();
  }, []);

  return (
    <main className="main">
      <div className="main__container container">
        <div className="stock">
          {promo ? (
            promo.map((obj) => (
              <div key={obj.id} className="stock__element">
                <div className="stock__element-left">
                  <img src={`http://localhost:8000/` + obj.img} alt="" />
                </div>
                <div className="stock__element-right">
                  <div className="stock__element-title">
                    <div className="stock__element-name">{obj.name}</div>
                    <div className="stock__element-desc">{obj.desc}</div>
                    <div className="stock__element-date">
                      Акция действует с{" "}
                      <span className="bold">{obj.start_date}</span> по{" "}
                      <span className="bold">{obj.end_date}</span>
                    </div>
                    <div className="stock__element-pracent">
                      Скидка <span>{obj.precent}%</span>
                    </div>
                  </div>
                  <div className="stock__element-action">
                    <Link>Перейти к акционным товарам</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="stock__clear">Пока акций нет</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Stock;
