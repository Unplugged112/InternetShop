import React from 'react'
import Card from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import styles from './Catalog.scss'
function Catalog() {

  const [activeFilters, setActiveFilters] = React.useState(false);
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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

export default Catalog