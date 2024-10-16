import { useParams } from "react-router-dom";
import Header from "../../layout/header/header";
import Title from "../../components/title/title";
import styles from "./catalogPage.module.sass";

const CatalogPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className={styles.catalog__left__side}>
          <Title children={"Верх"} />

          <div className={styles.subcategories}>
            <h3 className={styles.left__side__title}>ПОДКАТЕГОРИИ:</h3>
            <div className={styles.title__items}>
              <p className={styles.left__side__item}>Платья</p>
              <p className={styles.left__side__item}>Верх</p>
              <p className={styles.left__side__item}>Низ</p>
              <p className={styles.left__side__item}>Мелочи</p>
              <p className={styles.left__side__item}>Костюмы</p>
            </div>
          </div>

          <div className={styles.price}>
            <h3 className={styles.left__side__title}>ЦЕНЫ:</h3>
            <div className={styles.title__items}>
              <ul type="circle">
                <li className={styles.left__side__item}>Все цены</li>
                <li className={styles.left__side__item}>до 500</li>
                <li className={styles.left__side__item}>500 — 1000</li>
                <li className={styles.left__side__item}>1000 — 1500</li>
                <li className={styles.left__side__item}>от 1500</li>
              </ul>
            </div>
          </div>

          <div className={styles.sizes}>
            <h3 className={styles.left__side__title}>РАЗМЕР:</h3>
            <div className={styles.title__items}>
              <ul type="circle">
                <li className={styles.left__side__item}>XS — S</li>
                <li className={styles.left__side__item}>S — M</li>
                <li className={styles.left__side__item}>M — L</li>
                <li className={styles.left__side__item}>L — XL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
