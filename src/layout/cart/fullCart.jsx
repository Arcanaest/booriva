import { Link } from "react-router-dom";
import CardCloseSvg from "../../assets/svg/cardCloseSvg";
import styles from "./cart.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../redux/cartSlice/cartSlice";

const FullCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalSum = cartItems.reduce(
    (sum, { product, count }) => sum + product.price * count,
    0
  );

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(
      ({ product }) => product.id !== productId
    );
    dispatch(setCartItems(updatedCart));  
  };

  return (
    <div>
      <div className={styles.cart_scroll}>
        {cartItems.map(({ product, count }) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className={styles.cartItems}>
              <div className={styles.cart_img}>
                <img
                  src={product.images[0]}  
                  alt={product.name}
                  className={styles.prod_image}
                />
              </div>

              <div className={styles.cart_discr}>
                <p className={styles.prod_name}>
                  {product.name}: {count}
                </p>
                <div
                  className={styles.close_svg}
                  onClick={() => removeFromCart(product.id)}
                >
                  <CardCloseSvg />
                </div>
                <p className={styles.prod_price}>{product.price}₽</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {cartItems.length !== 0 && (
        <div className={styles.sum}>
          <p className={styles.sum_text}>
            Сумма заказа: <b>{totalSum}₽</b>
          </p>
          <p className={styles.sum_text}>
            Стоимость доставки: <b>бесплатно</b>
          </p>
          <p className={styles.sum_check}>
            К оплате: <b>{totalSum}₽</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default FullCart;
