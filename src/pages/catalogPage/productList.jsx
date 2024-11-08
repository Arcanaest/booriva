import ProductCard from "../../components/productCard/productCard";
import styles from "./productList.module.sass";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className={styles.container}>
      {products.map(({ id, name, price, images }) => (
        <ProductCard
        key={id}
        name={name}
        price={price}
        image={images[0]}
        onClick={() => onProductClick(id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
