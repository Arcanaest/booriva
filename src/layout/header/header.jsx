import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GpsSvg from "../../assets/svg/gpsSvg";
import TelSvg from "../../assets/svg/telSvg";
import BoorivaLogoSvg from "../../assets/svg/boorivaLogoSvg";
import InputSvg from "../../assets/svg/inputSvg";
import LikeSvg from "../../assets/svg/likeSvg";
import BagSvg from "../../assets/svg/bagSvg";
import styles from "./header.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/cartSlice/cartSlice";

const Header = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((res) => setMenu(res));
  }, []);

  const cartItemCount = Array.isArray(cartItems)
  ? cartItems.reduce((total, { count }) => total + count, 0)
  : 0;
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <div className={styles.nav__up}>
            <div className={styles.nav__left}>
              <div className={styles.adress__nav}>
                <div>
                  <GpsSvg />
                </div>
                <p className={styles.nav__left__item}>
                  Грозный, проспект Кадырова 216
                </p>
              </div>

              <div className={styles.number__nav}>
                <div>
                  <TelSvg />
                </div>
                <p className={styles.nav__left__item}>+8(999) 999 99 99</p>
              </div>
            </div>

            <div>
              <Link to="/">
                <BoorivaLogoSvg />

              </Link>
            </div>

            <div className={styles.nav__right}>
              <div className={styles.nav__right__input}>
                <div>
                  <InputSvg />
                </div>
                <span className={styles.input}>Поиск</span>
              </div>
              <div className={styles.nav__right__icons}>
                <div className={styles.heart}>
                  <Link to="/FavoritesPage">
                    <LikeSvg></LikeSvg>
                  </Link>
                </div>
                <div
                  className={styles.cart}
                  onClick={() => dispatch(setIsCartOpen(true))}
                >
                  <BagSvg />
                  {cartItemCount > 0 && (
                  <div className={styles.cart__count}>{cartItemCount}</div>
                )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nav__down}>
            <Link to="/" className={styles.nav__item}>
              Главная
            </Link>
            {menu.map(({ id, name }) => (
              <Link to={`/catalog/${id}`} key={id} className={styles.nav__item}>
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
