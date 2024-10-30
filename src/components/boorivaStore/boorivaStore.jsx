import boorivaImg from "../../../public/boorivaStore.png";
import leftImg from "../../../public/store-bg-left.svg";
import rightImg from "../../../public/store-bg-right.svg";

import styles from "./boorivaStore.module.sass";

const BoorivaStore = () => {
  return (
    <div className={styles.storeSection}>
      <div className={styles.storeSectionLeft}>
        <div className={styles.storeCaption}>
          BOORIVA
          <br /> STORE
        </div>
        <div className={styles.storeAdress}>
          г.Грозный ул.Магазинная <br /> Ежедневно с 11:00 до 21:00
        </div>
        <img className={styles.leftImg} src={leftImg} alt="" />
      </div>
      <div className={styles.storeSectionMiddle}>
        <img className={styles.middleImg} src={boorivaImg} alt="" />
      </div>
      <div className={styles.storeSectionRight}>
        <img className={styles.rightImg} src={rightImg} alt="" />
        <div className={styles.storeInfo}>
          Ты можешь заказать <br />
          примерку понравившейся
          <br />
          вещи или просто <br />
          заглянуть, гуляя по Подолу,
          <br />и примерять что-то
          <br />
          из в наличии
        </div>
      </div>
    </div>
  );
};
export default BoorivaStore;
