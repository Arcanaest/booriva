import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../layout/header/header";
import InstaPage from "../../layout/instaPage/instaPage";
import ProductCard from "../../components/productCard/productCard";
import Title from "../../components/title/title";
import { Button } from "../../components/button/button";
import BrokenHeart from "../../../public/heart.png";
import styles from "./favoritesPage.module.sass";

const FavoritesPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      if (favorites.length > 0) {
        try {
          const products = await Promise.all(
            favorites.map((id) =>
              fetch(
                `https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`
              ).then((response) => response.json())
            )
          );
          setFavoriteProducts(products);
        } catch (error) {
          console.error("Ошибка при загрузке избранных продуктов:", error);
          setFavoriteProducts([]);
        }
      } else {
        setFavoriteProducts([]); // Очистка списка, если избранное пустое
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  return (
    <div>
      <Header />
      <Title
        categoryName="СПИСОК ЖЕЛАНИЙ"
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
        <div className={styles.cardContainer}>
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </div>
      )}
      <InstaPage />
    </div>
  );
};

export default FavoritesPage;
