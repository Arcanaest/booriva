import { Link } from "react-router-dom";
import Empty from "./empty/empty";
import ExitSvg from "../../assets/svg/exitSvg";
import { Button } from "../../components/button/button";
import CardCloseSvg from "../../assets/svg/cardCloseSvg";
import styles from "./cart.module.sass";
import SliderCart from "./sliderCart/sliderCart";

const Cart = ({ setIsCartOpen, isCartOpen, cartItems, setIsVisibles, setCartItems }) => {
  const totalSum = cartItems.reduce(
    (sum, { product, count }) => sum + product.price * count,
    0
  );
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(({ product }) => product.id !== productId);
    setCartItems(updatedCart);
  };
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
        <div
          className={styles.exitCart_svg}
          onClick={() => setIsVisibles(false)}
        >
          <ExitSvg />
        </div>
        <h1 className={styles.cart_title}>КОРЗИНА</h1>
        {cartItems.length === 0 ? (
          <Empty />
        ) : (
          cartItems.map(({ product, count }) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className={styles.cartItems}>
                <div className={styles.cart_img}>
                  <img
                    src={product.images}
                    alt={product.name}
                    className={styles.prod_image}
                  />
                </div>
               
                <div className={styles.cart_discr}>
                  <p className={styles.prod_name}>
                    {product.name}: {count}
                  </p>
                  <div className={styles.close_svg} onClick={() => removeFromCart(product.id)}>
                  <CardCloseSvg />
                </div>
                  <p className={styles.prod_price}>{product.price}₽</p>
                </div>
              </div>
            </Link>
          ))
        )}
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
        <Button>Оформить заказ</Button>
      </div>
      <SliderCart/>
    </div>
    
  );
};

export default Cart;
