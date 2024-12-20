import React, { useState } from "react"; // Import useState
import Header from "../../layout/header/header";
import { Button } from "../../components/button/button";
import Title from "../../components/title/title";
import styles from "./orderPage.module.sass";

const OrderPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("postal");
  const [comment, setComment] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

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
    // Handle form submission logic here
    console.log("Form Data:", formData);
    console.log("Selected Method:", selectedMethod);
    console.log("Comment:", comment);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.orderContainer}>
          <div className={styles.leftSection}>
            <div className={styles.firstSection}>
              <div className={styles.forms}>
                <form onSubmit={handleSubmit}>
                <Title categoryName="1" subCategoryName="КОНТАКТНЫЕ ДАННЫЕ" />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Фамилия"
                    required
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7(928)"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <div className={styles.secondSection}>
                    <Title categoryName="2" subCategoryName="СПОСОБ ДОСТАВКИ" />
                    <div className={styles.forms}>
                      <div>
                        <input
                          type="radio"
                          id="postal"
                          name="deliveryMethod"
                          value="postal"
                          checked={selectedMethod === "postal"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="postal">Доставка в отделение почты</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="pickup"
                          name="deliveryMethod"
                          value="pickup"
                          checked={selectedMethod === "pickup"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="pickup">Самовывоз с нашего шоурума</label>
                      </div>
                      <div>
                        <textarea
                          placeholder="Комментарий к заказу"
                          value={comment}
                          onChange={handleCommentChange}
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                  <Button type="submit">ПОДТВЕРДИТЬ ЗАКАЗ</Button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}></div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;