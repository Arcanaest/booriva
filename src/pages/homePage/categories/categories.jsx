import { Button } from "../../../components/button/button";
import styles from "./categories.module.sass";

const Categories = () => {
  return (
    <div className="wrapper">
      <div className={styles.categories__container}>
        <div className={styles.categories__left}>
          <div className={styles.categories__left__up}>
            <div className={styles.imageContainer}>
              <img
                className={styles.bigImg}
                src="/categ1.jpg"
                alt="Category 1"
              />
              <Button children={"Футболки"} className={styles.imageButton}/>
            </div>
          </div>

          <div className={styles.categories__left__down}>
            <div className={styles.imageContainer}>
              <img
                className={styles.smallImg}
                src="/categ2.jpg"
                alt="Category 2"
              />
             <Button children={"Низ"} className={styles.imageButton}/>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.smallImg}
                src="/categ3.jpg"
                alt="Category 3"
              />
              <Button children={"Верх"} className={styles.imageButton}/>
            </div>
          </div>
        </div>

        <div className={styles.categories__right}>
          <div className={styles.categories__right__up}>
            <div className={styles.imageContainer}>
              <img
                className={styles.smallImg}
                src="/categ4.jpg"
                alt="Category 4"
              />
              <Button children={"Платья"} className={styles.imageButton}/>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.smallImg}
                src="/categ5.jpg"
                alt="Category 5"
              />
              <Button children={"Костюмы"} className={styles.imageButton}/>
            </div>
          </div>
          <div className={styles.categories__right__down}>
            <div className={styles.imageContainer}>
              <img
                className={styles.bigImg}
                src="/categ6.jpg"
                alt="Category 6"
              />
              <Button children={"Худи"} className={styles.imageButton}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
