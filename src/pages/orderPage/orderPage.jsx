import React, { useState } from "react";
import Header from "../../layout/header/header";
import { Button } from "../../components/button/button";
import Title from "../../components/title/title";
import Modal from "./modal";
import styles from "./orderPage.module.sass";

const OrderPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("postal");
  const [comment, setComment] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true); // Открываем модальное окно
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  const handleGoHome = () => {
    // Логика для перехода на главную страницу
    window.location.href = "/"; 
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className={styles.orderContainer}>
          <div className={styles.leftSection}>
            <form onSubmit={handleSubmit}>
              <div className={styles.firstSection}>
                <div className={styles.leftElement}>
                  <Title
                    categoryName="1"
                    subCategoryName="КОНТАКТНЫЕ ДАННЫЕ"
                    customClass={styles.customTitle}
                  />
                </div>

                <div className={styles.rightElement}>
                  <input
                    className={styles.orderIn}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.orderIn}
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Фамилия"
                    required
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.orderIn}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7(928)"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.orderIn}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>

            <div className={styles.secondSection}>
              <div className={styles.leftElement}>
                <Title
                  categoryName="2"
                  subCategoryName=" СПОСОБ ДОСТАВКИ"
                  customClass={styles.customTitle}
                />
              </div>
              <div className={styles.rightElement}>
                <div className={styles.radioWrapper}>
                  <input
                    className={styles.orderRadio}
                    type="radio"
                    id="postal"
                    name="deliveryMethod"
                    value="postal"
                    checked={selectedMethod === "postal"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="postal" className={styles.orderLabel}>Доставка в отделение почты</label>
                </div>
                <div className={styles.radioWrapper}>
                  <input
                    className={styles.orderRadio}
                    type="radio"
                    id="pickup"
                    name="deliveryMethod"
                    value="pickup"
                    checked={selectedMethod === "pickup"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="pickup" className={styles.orderLabel}>Самовывоз с нашего шоурума — <p className={styles.pink}>бесплатно</p></label>
                </div>
                <div>
                  <textarea
                    className={styles.orderComment}
                    placeholder="Комментарий к заказу"
                    value={comment}
                    onChange={handleCommentChange}
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderBtn}>
            <Button type="submit" onClick={handleSubmit}>ПОДТВЕРДИТЬ ЗАКАЗ</Button>
          </div>
        </div>
        <div className={styles.rightSection}></div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onGoHome={handleGoHome} 
      />
    </div>
  );
};

export default OrderPage;