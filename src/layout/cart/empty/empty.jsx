import { Link } from "react-router-dom";
import EmptySvg from "../../../assets/svg/emptySvg";
import { Button } from "../../../components/button/button";
import ExitSvg from "../../../assets/svg/exitSvg";
import styles from "./empty.module.sass";

const Empty = ({ setIsVisibles }) => {
  return (
    <>
     <div className={styles.exit_svg} onClick={() => setIsVisibles(false)}>
        <ExitSvg />
        </div>
      <div className={styles.empty_container}>
        <p className={styles.empty_title}>КОРЗИНА</p>
        <div className={styles.empty_svg}>
        <EmptySvg />
        </div>
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
