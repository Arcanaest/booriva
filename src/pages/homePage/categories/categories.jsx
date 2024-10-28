import { Button } from "../../../components/button/button";
import styles from "./categories.module.sass";

const Categories = () => {
  return (
    <div className="wrapper">
      <div className={styles.categories__container}>
        <div className={styles.categories__left}>
          <div className={styles.categories__left__up}>
            <div className={styles.shirt__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.bigImg}
                  src="/categ1.jpg"
                  alt="Category 1"
                />
              </div>
              <div className={styles.shirt__btn}>
                <Button className={styles.imageButton}>Футболки</Button>
              </div>
            </div>
          </div>

          <div className={styles.categories__left__down}>
            <div className={styles.bottom__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.smallImg}
                  src="/categ2.jpg"
                  alt="Category 2"
                />
              </div>

              <div className={styles.bottom__btn}>
                <Button className={styles.imageButton}>Низ</Button>
              </div>
            </div>
            <div className={styles.top__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.smallImg}
                  src="/categ3.jpg"
                  alt="Category 3"
                />
              </div>
              <div className={styles.top__btn}>
                <Button className={styles.imageButton}>Верх</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.categories__right}>
          <div className={styles.categories__right__up}>
            <div className={styles.dresses__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.smallImg}
                  src="/categ4.jpg"
                  alt="Category 4"
                />
              </div>
              <div className={styles.dresses__btn}>
                <Button className={styles.imageButton}>Платья</Button>
              </div>
            </div>
            <div className={styles.suits__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.smallImg}
                  src="/categ5.jpg"
                  alt="Category 5"
                />
              </div>
              <div className={styles.suits__btn}>
                <Button className={styles.imageButton}>Костюмы</Button>
              </div>
            </div>
          </div>
          <div className={styles.categories__right__down}>
            <div className={styles.hoodie__foto}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.bigImg}
                  src="/categ6.jpg"
                  alt="Category 6"
                />
              </div>
              <div className={styles.hoodie__btn}>
                <Button className={styles.imageButton}>Худи</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
