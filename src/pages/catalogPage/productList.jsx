import ProductCard from "../../components/productCard/productCard";
import styles from "./productList.module.sass";

const ProductList = ({ products, favorites, setFavorites }) => {
  return (
    <div className={styles.container}>
      {products.map(({ id, name, price, images }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          price={price}
          image={images[0]}
          setFavorites={setFavorites}
          favorites={favorites}
        />
      ))}
    </div>
  );
};

export default ProductList;
