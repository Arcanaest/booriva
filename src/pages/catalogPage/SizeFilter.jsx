import React from "react";
import styles from "./catalogPage.module.sass";

const SizeFilter = () => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.left__side__title}>РАЗМЕР:</h3>
      <div className={styles.title__items}>
        <ul type="circle">
          <li className={styles.left__side__item}>XS — S</li>
          <li className={styles.left__side__item}>S — M</li>
          <li className={styles.left__side__item}>M — L</li>
          <li className={styles.left__side__item}>L — XL</li>
        </ul>
      </div>
    </div>
  );
};

export default SizeFilter;
