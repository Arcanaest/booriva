import Header from "../../layout/header/header";
import InstaPage from "../../layout/instaPage/instaPage";
import ProductCard from "../../components/productCard/productCard";
import ProductList from "../catalogPage/productList";
import Title from "../../components/title/title";
import { Button } from "../../components/button/button";
import { Link } from "react-router-dom";
import BrokenHeart from "../../../public/heart.png";
import Exchange from "../../../public/exchange.png";
import Delivery from "../../../public/delivery.png";
import Madein from "../../../public/madein.png";
import { useState } from "react";
import styles from "./favoritesPage.module.sass";

const FavoritesPage = ({ products }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div>
      <Header />
      <Title
        categoryName="CПИСОК ЖЕЛАНИЙ"
        subCategoryName="ТВОЙ ТАЙНЫЙ СПИСОК ЖЕЛАНИЙ"
      />
      {favoriteProducts.length === 0 ? (
        <div>
          <div className={styles.img}>
            <img className={styles.heart} src={BrokenHeart} alt="brokenHeart" />
          </div>
          <p className={styles.text}>
            Похоже тебе еще ничего не запало в сердечко....
          </p>
          <Link to="/">
            <Button>НА ГЛАВНУЮ</Button>
          </Link>
        </div>
      ) : (
        <div>
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              isFavoriteProp={true} // Все продукты на странице избранного будут любимыми
              onToggleFavorite={() => {}} // Можно оставить пустым // или добавить логику, если нужно
            />
          ))}
        </div>
      )}
      <div className={"wrapper " + styles.conditions}>
        <div className={styles.delivery}>
          <img src={Delivery} alt="" />
          <div className={styles.textBox}>
            <p className={styles.upperText}>Отправка день в день</p>
            <p className={styles.lowerText}>При заказе до 1800</p>
          </div>
        </div>
        <div className={styles.exchange}>
          <img src={Exchange} alt="" />
          <div className={styles.textBox}>
            <p className={styles.upperText}>Легкий возврат/обмен</p>
            <p className={styles.lowerText}>В течении 14 дней</p>
          </div>
        </div>
        <div className={styles.madein}>
          <img src={Madein} alt="" />
          <div className={styles.textBox}>
            <p className={styles.upperText}>Сделано в Москве</p>
            <p className={styles.lowerText}>Прямо в Грозном</p>
          </div>
        </div>
      </div>
      <InstaPage />
    </div>
  );
};

export default FavoritesPage;
