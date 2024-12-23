import { Link } from "react-router-dom";
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
        <Link to={`/product/${id}`} key={id} className={styles.productLink}>
          <ProductCard key={id} name={name} price={price} image={images[0]} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
