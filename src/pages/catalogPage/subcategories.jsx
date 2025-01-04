import React from "react";
import styles from "./catalogPage.module.sass";

const Subcategories = ({ subcategories, activeSubcategory, toNavigate, categoryName }) => {
  return (
    <div className={styles.subcategoryWrapper}>
    {categoryName !== "Новинки" && (
      <div className={styles.filters}>
        <div className={styles.subcategories}>
        <h3 className={styles.left__side__title}>
            ПОДКАТЕГОРИИ:
          </h3>
          <div className={styles.title__items}>
            {subcategories.map((subcategory) => (
              <div
                onClick={() => toNavigate(subcategory.id)}
                key={subcategory.id}
                className={`${styles.left__side__item} ${
                  activeSubcategory === subcategory.id
                    ? styles.active
                    : ""
                }`}
              >
                {subcategory.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Subcategories;
