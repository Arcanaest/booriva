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
                <p>
                  {product.name}: {count}
                </p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Cart;
