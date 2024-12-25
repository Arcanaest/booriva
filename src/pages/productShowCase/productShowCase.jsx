import { Button } from "../../components/button/button";
import InstaPage from "../../layout/instaPage/instaPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./slider/slider";
import Advantages from "../../components/advantages/advantages";
import ProductCard from "../../components/productCard/productCard";
import ProductList from "../catalogPage/productList";
import styles from "./productShowCase.module.sass";

const ProductShowCase = ({
  setCartItems,
  cartItems,
  setIsCartOpen,
}) => {
  const { id } = useParams();
  const [showCase, setShowCase] = useState([]);
  const [btnValue, setBtnValue] = useState("В корзину");
  useEffect(() => {
    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`)
      .then((res) => res.json())
      .then((data) => setShowCase(data))
      .catch((err) => console.log(err));
  }, [id]);
  const addProductToCart = () => {
    if (cartItems.some(({ product }) => product.id === showCase.id)) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === showCase.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { product: showCase, count: 1 }]);
    }
    setIsCartOpen(true);
    setBtnValue("Добавлено");
    setTimeout(() => setBtnValue("В корзину"), 3000);
  };

  return (
    <div>
      <div className={"wrapper " + styles.showCase_elements}>
        <div className={styles.showCase_right}>
          {showCase.images && <Slider images={showCase.images} />}
        </div>
        <div className={styles.showCase_left}>
          <h3 className={styles.showCase_name}>{showCase.name}</h3>
          <p className={styles.showCase_price}>{showCase.price}₽</p>
          <p className={styles.showCase_choise}>Выбрать размер:</p>
          <div className={styles.showCase_sizes}>
            <p className={styles.showCase_size}>XS — S</p>
            <p className={styles.showCase_size}>S — M</p>
            <p className={styles.showCase_size}>M — L</p>
            <p className={styles.showCase_size}>L — XL</p>
          </div>
          <div className={styles.showCase_btn} onClick={addProductToCart}>
            <Button>{btnValue}</Button>
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
