import { Link } from "react-router-dom";
import EmptySvg from "../../../assets/svg/emptySvg";
import { Button } from "../../../components/button/button";
import styles from "./empty.module.sass";
import ExitSvg from "../../../assets/svg/exitSvg";

const Empty = () => {
  return (
    <>
      <div className={styles.empty_container}>
        <ExitSvg />
        <p className={styles.empty_title}>Корзина</p>
        <EmptySvg />
        <p className={styles.empty_text}>
          Твоя корзина пуста, но это никогда не поздно исправить :)
        </p>
        <Link to="/catalog/000">
          <Button>За покупками</Button>
        </Link>
      </div>
    </>
  );
};

export default Empty;
