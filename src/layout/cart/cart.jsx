import { Link } from "react-router-dom";
import Empty from "./empty/empty";
import styles from "./cart.module.sass";

const Cart = ({ setIsCartOpen, isCartOpen, cartItems }) => {
  return (
    <div
      className={styles.wrapper + " " + (!isCartOpen && styles.wrapper_close)}
    >
      <div
        className={styles.background}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div
        className={
          styles.cart__wrapper + " " + (isCartOpen ? styles.open : styles.close)
        }
      >
        {cartItems.length === 0
          ? <Empty/>
          : cartItems.map(({ product, count }) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                 <div className={styles.cartItem}>
                <img 
                  src={product.images} 
                  alt={product.name} 
                  className={styles.prod_image}
                />
                <p className={styles.prod_name}>
                  {product.name}: {count}
                </p>
                <p className={styles.prod_price}>
                  {product.price}₽
                </p>
                </div>
              </Link>
            ))}
      </div>

    </div>
  );
};

export default Cart;
