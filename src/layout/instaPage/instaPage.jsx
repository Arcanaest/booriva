import hoody from "../../../public/hoody.png";
import coat from "../../../public/coat.png";
import girl from "../../../public/girl.png";
import blackcoat from "../../../public/blackcoat.png";
import closet from "../../../public/closet.png";

import styles from "./instPage.module.sass";

const InstaPage = () => {
  return (
    <div>
      <div className={styles.instaPage}>
        <div className={styles.leftSection}>
          <div className={styles.leftSectionCaption}>INSTAGRAM</div>
          <div className={styles.leftSectionText}>
            Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще
          </div>
          <div className={styles.leftSectionImages}>
            <img src={girl} alt="" />
            <img className={styles.croppedImage} src={blackcoat} alt="" />
          </div>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.middleSectionImage}>
            <img src={hoody} alt="" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightSectionImages}>
            <img className={styles.croppedImage} src={closet} alt="" />
            <img src={coat} alt="" />
          </div>
          <div className={styles.rightSectionTag}>#boorivagirls</div>
          <div className={styles.rightSectionText}>
            Ставь тэг чтобы быть в нашей тусовке.
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className={styles.instaPage2}>
        <div className={styles.leftSection2}>
          <div className={styles.leftSectionCaption}>INSTAGRAM</div>
          <div className={styles.leftSectionText}>
            Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще
          </div>
        </div>
        <div className={styles.leftSectionImages}>
          <img className = {styles.regularImg} src={girl} alt="" />
          <img className={styles.croppedImage} src={blackcoat} alt="" />
          <img className={styles.croppedImage} src={closet} alt="" />
          <img className={styles.regularImg} src={coat} alt="" />
        </div>
        <div className={styles.middleSectionImage}>
          <img className={styles.middleImg} src={hoody} alt="" />
        </div>
        <div className={styles.rightSection2}>
          <div className={styles.rightSectionTag}>#boorivagirls</div>
          <div className={styles.rightSectionText}>
            Ставь тэг чтобы быть в нашей тусовке.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPage;
