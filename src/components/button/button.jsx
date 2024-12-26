import BtnBgSvg from "../../assets/svg/btnBgSvg";

import styles from "./button.module.sass";

export const Button = ({ children, onClick }) => {
  return (
    <div className="container">
      <div className={styles.btn}>
        <div className={styles.bg}>
          <BtnBgSvg />
        </div>
        <div onClick={onClick} className={styles.text}>{children}</div>
      </div>
    </div>
  );
};
