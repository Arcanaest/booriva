import React, { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/productCard";
import styles from "./productList.module.sass";

const ProductList = ({ products }) => {
  const [favorites, setFavorites] = useState(() => {
    // Retrieve favorites from local storage
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleToggleFavorite = (id, isFavorite) => {
    const updatedFavorites = isFavorite
      ? [...favorites, id]
      : favorites.filter((favoriteId) => favoriteId !== id);

    setFavorites(updatedFavorites);
    // Update local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className={styles.container}>
      {products.map(({ id, name, price, images }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          price={price}
          image={images[0]}
          isFavoriteProp={favorites.includes(id)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
