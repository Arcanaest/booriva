import { useDispatch, useSelector } from "react-redux";
import HeartSvg from "../../assets/svg/heartSvg";
import styles from "./productCard.module.sass";
import { setFavorites } from "../../redux/favoritesSlice/favoritesSlice";

const ProductCard = ({ id, name, image, price }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const handleToggleFavorite = (id) => {
    console.log(favorites, id);

    if (favorites) {
      const updatedFavorites = !favorites.includes(id)
        ? [...favorites, id]
        : favorites.filter((favoriteId) => favoriteId !== id);
      dispatch(setFavorites(updatedFavorites));
    }
  };

  return (
    <div className={styles.card}>
      {" "}
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        {" "}
        <div className={styles.heart} onClick={() => handleToggleFavorite(id)}>
          {" "}
          <HeartSvg isSave={favorites && favorites.includes(id)} />{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.flex}>
        {" "}
        <div className={styles.name}>{name}</div>{" "}
        <div className={styles.price}>{price} ₽</div>{" "}
      </div>{" "}
    </div>
  );
};

export default ProductCard;
