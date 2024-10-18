import styles from "./footer.module.sass";
import logo from "../../../public/logo.png";
import instaLogo from "../../../public/instaLogo.png";
import fbLogo from "../../../public/fbLogo.png";
import ivanka from "../../../public/ivanka.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerBlock + " wrapper"}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo}></img>
          </div>
          <div className={styles.info}>
            <div className={styles.infoCaption}>ИНФО</div>
            <div className={styles.infoItems}>
              <div className={`${styles.infoItem} ${styles.contacts}`}>Контакты</div>
              <div className={styles.infoItem}>Система лояльности</div>
              <div className={styles.infoItem}>Обмен и возврат</div>
              <div className={styles.infoItem}>Доставка и оплата</div>
              <div className={styles.socialLogos}>
              <div className={styles.instaLogo}>
                <img src={instaLogo} alt="" />
              </div>
              <div className={styles.Fblogo}>
                <img src={fbLogo} alt="" />
              </div>
            </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.locationCaptionMax}>НАШ АДРЕС</div>
            <div className={styles.locationCaption}>Контакты</div>
            <div className={styles.locationInfo}>
              <p>г.Грозный</p>
              <p>Пн-Вс: с 11:00 до 21:00</p>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.socialCaption}>СОЦ. СЕТИ</div>
            <div className={styles.socialLogosMax}>
              <div className={styles.instaLogo}>
                <img src={instaLogo} alt="" />
              </div>
              <div className={styles.Fblogo}>
                <img src={fbLogo} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackImg}>
              <img src={ivanka} alt="" />
            </div>
            <div className={styles.feedbackInfo}>
              <div className={styles.feedbackText}>
                Нам важно знать, что ты думаешь про нас! Просто напиши мне!
              </div>
              <div className={styles.feedbackCaption}>Написать Иванке</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
