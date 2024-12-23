import React from "react";
import Subcategories from "./Subcategories";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import styles from "./catalogPage.module.sass";

const Sidebar = ({ subcategories, activeSubcategory, toNavigate, activePriceFilter, filterByPrice }) => {
  return (
    <div className={styles.catalog__left__side}>
      <div className={styles.title}>
        <h2>Каталог</h2>
      </div>
      <div className={styles.subcategoryWrapper}>
        <Subcategories
          subcategories={subcategories}
          activeSubcategory={activeSubcategory}
          toNavigate={toNavigate}
        />
      </div>
      <div className={styles.price}>
        <PriceFilter
          activePriceFilter={activePriceFilter}
          filterByPrice={filterByPrice}
        />
      </div>
      <SizeFilter />
    </div>
  );
};

export default Sidebar;
