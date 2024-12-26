import React from "react";
import styles from "./modal.module.sass"; // Импортируйте стили для модального окна
import Title from "../../components/title/title";

const Modal = ({ isOpen, onClose, onGoHome }) => {
  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <Title
                    categoryName="СПАСИБО"
                    subCategoryName="ВАШ ЗАКАЗ ПРИНЯТ"
                    customClass={styles.customTitle}
                  />
        <p>Мы обожаем встречать booriva на улице.  Так как всех не встретишь, отмечай нас в соц.сетях  и мы внутри взорвемся и закричим УРА! 
        Ставь тэг <span className={styles.boorivaTag}>#boorivagirls</span> чтобы быть в нашей тусовке.</p>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.closeButton}>Закрыть</button>
          <button onClick={onGoHome} className={styles.goHomeButton}>На главную</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;