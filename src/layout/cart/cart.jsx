import Empty from "./empty/empty";
import ExitSvg from "../../assets/svg/exitSvg";
import { Button } from "../../components/button/button";
import FullCart from "./fullCart";
import SliderCart from "./sliderCart/sliderCart";
import styles from "./cart.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  console.log("cartItems in Cart:", cartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div
      className={styles.wrapper + " " + (!isCartOpen && styles.wrapper_close)}
    >
      <div
        className={styles.background}
        onClick={() => dispatch(setIsCartOpen(false))}
      ></div>
      <div
        className={
          styles.cart__wrapper + " " + (isCartOpen ? styles.open : styles.close)
        }
      >
        {cartItems.length !== 0 ? (
          <>
            <div
              className={styles.exitCart_svg}
              onClick={() => dispatch(setIsCartOpen(false))}
            >
              <ExitSvg />
            </div>
            <h1 className={styles.cart_title}>КОРЗИНА</h1>
          </>
        ) : (
          ""
        )}
        {cartItems.length === 0 ? <Empty /> : <FullCart />}
        <div>
          <Link to="/OrderPage">
            {cartItems.length !== 0 && <Button>Оформить заказ</Button>}
          </Link>
        </div>
      </div>
      <SliderCart />
    </div>
  );
};

export default Cart;
