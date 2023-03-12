import React from 'react'
import styles from './Catalog.scss'
function Catalog() {
  return (
    <main>
      <div className="main__container container">
        <div className="main__catalog-head ">
          <div className="main__catalog-title">
            <h3>Каталог</h3>
          </div>
          <div className="main__catalog-filters">
            <span>Фильтры</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Catalog