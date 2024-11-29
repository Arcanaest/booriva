import React, { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/productCard";
import FavoritesPage from "./favoritesPage";

const AddToFavorite = ({ products }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleToggleFavorite = (productId, isFavorite) => {
    const updatedFavorites = isFavorite
      ? [...favorites, products.find((p) => p.id === productId)]
      : favorites.filter((p) => p.id !== productId);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return <FavoritesPage favorites={favorites} onToggleFavorite={handleToggleFavorite} />;
};

export default AddToFavorite;