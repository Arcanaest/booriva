import { useState } from "react";
import styles from "./header.module.sass";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GpsSvg from "../../assets/svg/gpsSvg";
import TelSvg from "../../assets/svg/telSvg";
import BoorivaLogoSvg from "../../assets/svg/boorivaLogoSvg";
import InputSvg from "../../assets/svg/inputSvg";
import LikeSvg from "../../assets/svg/likeSvg";
import BagSvg from "../../assets/svg/bagSvg";

const Header = () => {
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((res) => setMenu(res));
  }, []);
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <div className={styles.nav__up}>
            <div className={styles.nav__left}>
              <div className={styles.adress__nav}>
                <div>
                  <GpsSvg></GpsSvg>
                </div>
                <p className={styles.nav__left__item}>
                  Грозный, проспект Кадырова 216
                </p>
              </div>

              <div className={styles.number__nav}>
                <div>
                  <TelSvg></TelSvg>
                </div>
                <p className={styles.nav__left__item}>+8(999) 999 99 99</p>
              </div>
            </div>

            <div>
              <BoorivaLogoSvg></BoorivaLogoSvg>
            </div>

            <div className={styles.nav__right}>
              <div className={styles.nav__right__input}>
                <div>
                  <InputSvg></InputSvg>
                </div>
                <span className={styles.input}>Поиск</span>
              </div>
              <div className={styles.nav__righ__icons}>
                <div>
                  <LikeSvg></LikeSvg>
                </div>
                <div>
                  <BagSvg></BagSvg>
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
