import React from "react";
import styles from "./modal.module.sass"; // Импортируйте стили для модального окна

const Modal = ({ isOpen, onClose, onGoHome }) => {
  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Спасибо за оформление заказа. Обращайтесь к нам еще</h2>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.closeButton}>Закрыть</button>
          <button onClick={onGoHome} className={styles.goHomeButton}>На главную</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;