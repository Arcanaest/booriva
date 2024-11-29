import React, { useState } from "react";
import HeartSvg from "../../assets/svg/heartSvg";
import styles from "./productCard.module.sass";

const ProductCard = ({
  id,
  name,
  image,
  price,
  isFavoriteProp,
  onToggleFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(id, !isFavorite);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.heart} onClick={handleToggleFavorite}>
          <HeartSvg className={styles.heartSvg} isSave={isFavorite} />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price} ₽</div>
      </div>
    </div>
  );
};

export default ProductCard;
