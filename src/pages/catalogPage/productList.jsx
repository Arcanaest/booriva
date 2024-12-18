import ProductCard from "../../components/productCard/productCard";
import styles from "./productList.module.sass";
import { useDispatch, useSelector } from "react-redux";


const ProductList = ({ products }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      {" "}
      {products.map(({ id, name, price, images }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          price={price}
          image={images[0]}

        />
      ))}{" "}
    </div>
  );
};

export default ProductList;
