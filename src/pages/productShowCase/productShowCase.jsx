import Header from "../../layout/header/header";
import styles from "./productShowCase.module.sass";
import { Button } from "../../components/button/button";
import InstaPage from "../../layout/instaPage/instaPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./slider/slider";
import Advantages from "../../components/advantages/advantages";

const ProductShowCase = () => {
  const { id } = useParams();
  const [showCase, setShowCase] = useState([]);
  useEffect(() => {
    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`)
      .then((res) => res.json())
      .then((data) => setShowCase(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <Header />
      <div className={"wrapper " + styles.showCase_elements}>
        <div className={styles.showCase_right}>
          {showCase.images && <Slider images={showCase.images} />}
        </div>
        <div className={styles.showCase_left}>
          <h3 className={styles.showCase_name}>{showCase.name}</h3>
          <p className={styles.showCase_price}>{showCase.price}₽</p>
          <p className={styles.showCase_choise}>Выбрать размер:</p>
          <div className={styles.showCase_sizes}>
            <p className={styles.showCase_size}>XS — S</p>
            <p className={styles.showCase_size}>S — M</p>
            <p className={styles.showCase_size}>M — L</p>
            <p className={styles.showCase_size}>L — XL</p>
          </div>
          <div className={styles.showCase_btn}>
            <Button> В корзину</Button>
          </div>
          <p className={styles.showCase_desc}>{showCase.desc}</p>
          <p className={styles.showCase_details}>{showCase.details}</p>
        </div>
      </div>
      <Advantages />
      <InstaPage />
    </div>
  );
};

export default ProductShowCase;
