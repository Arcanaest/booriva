import HeartSvg from "../../assets/svg/heartSvg";
import styles from "./productCard.module.sass";

const ProductCard = ({ id, name, image, price }) => {
  const addProductToFavorite = () => {
    console.log(id);
  };
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.hurt} onClick={addProductToFavorite}>
          <HeartSvg isSave={false} />
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
