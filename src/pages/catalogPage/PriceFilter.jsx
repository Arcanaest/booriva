import React from "react";
import styles from "./catalogPage.module.sass";

const PriceFilter = ({ activePriceFilter, filterByPrice }) => {
  return (
    <div>
      <h3 className={styles.left__side__title}>ЦЕНЫ:</h3>
      <div className={styles.title__items}>
        <ul type="circle">
          <li
            onClick={() => filterByPrice("all")}
            className={`${styles.left__side__item} ${
              activePriceFilter === "all" ? styles.active : ""
            }`}
          >
            Все цены
          </li>
          <li
            onClick={() => filterByPrice("500")}
            className={`${styles.left__side__item} ${
              activePriceFilter === "500" ? styles.active : ""
            }`}
          >
            до 500
          </li>
          <li
            onClick={() => filterByPrice("1000")}
            className={`${styles.left__side__item} ${
              activePriceFilter === "1000" ? styles.active : ""
            }`}
          >
            500 — 1000
          </li>
          <li
            onClick={() => filterByPrice("1500")}
            className={`${styles.left__side__item} ${
              activePriceFilter === "1500" ? styles.active : ""
            }`}
          >
            1000 — 1500
          </li>
          <li
            onClick={() => filterByPrice("1500+")}
            className={`${styles.left__side__item} ${
              activePriceFilter === "1500+" ? styles.active : ""
            }`}
          >
            от 1500
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceFilter;
