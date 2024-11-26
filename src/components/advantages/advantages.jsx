import styles from "./advantages.module.sass";
import AdvantagesCatSvg from "../../assets/svg/advantagesCatSvg";
import AdvantagesBoxflySvg from "../../assets/svg/advantagesBoxflySvg";
import AdvantagesGivemoneySvg from "../../assets/svg/advantagesGivemoneySvg";


const Advantages = () => {
  return (
    <div className={ styles.advantages}>
      <div className={styles.advantages_items}>
        <div className={styles.advantages_icon}>
          <AdvantagesCatSvg></AdvantagesCatSvg>
        </div>
        <div className={styles.advantages_text}>
          <p className={styles.advantages_bigText}>Отправляем день в день</p>
          <p className={styles.advantages_smallText}>При заказе до 1800</p>
        </div>
      </div>
      <div className={styles.advantages_items}>
        <div className={styles.advantages_icon}>
          <AdvantagesBoxflySvg></AdvantagesBoxflySvg>
        </div>
        <div className={styles.advantages_text}>
          <p className={styles.advantages_bigText}>Легкий возврат/обмен</p>
          <p className={styles.advantages_smallText}>В течении 14 дней</p>
        </div>
      </div>
      <div className={styles.advantages_items}>
        <div className={styles.advantages_icon}>
          <AdvantagesGivemoneySvg></AdvantagesGivemoneySvg>
        </div>
        <div className={styles.advantages_text}>
          <p className={styles.advantages_bigText}>Отправляем наложкой</p>
          <p className={styles.advantages_smallText}>+ 2% от суммы </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
