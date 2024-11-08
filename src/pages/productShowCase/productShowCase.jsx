import { useParams } from "react-router-dom";
import Header from "../../layout/header/header";
import styles from "./productShowCase.module.sass";
import { Button } from "../../components/button/button";
import ProductCard from "../../components/productCard/productCard";
import InstaPage from "../../layout/instaPage/instaPage";
import Footer from "../../layout/footer/footer";

const ProductShowCase = () => {
  const { productId } = useParams()
  return (
    <div>
      <Header />
      <div className={styles.showCase_elements}>
        <div className={styles.showCase_right}>
          <img className={styles.showCase_images}></img>
        </div>
        <div className={styles.showCase_left}>
          <h3 className={styles.showCase_name}>Бомбер Gone Crazy хаки</h3>
          <p className={styles.showCase_price}>2 499 ₽</p>
          <p className={styles.showCase_choise}>Выбрать размер:</p>
          <div className={styles.showCase_sizes}>
            <p className={styles.showCase_size}>XS — S</p>
            <p className={styles.showCase_size}>S — M</p>
            <p className={styles.showCase_size}>M — L</p>
            <p className={styles.showCase_size}>L — XL</p>
          </div>
          <Button className={styles.showCase_btn}>В корзину</Button>
          <p className={styles.showCase_text}>Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается.</p>
          <p className={styles.showCase_component}>50% вискоза, 50% полиэстер</p>
        </div>
      </div>
      <ProductCard />
      <InstaPage />
      <Footer />
    </div>
  );
};

export default ProductShowCase;
