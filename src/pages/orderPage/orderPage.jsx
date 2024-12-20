import Header from "../../layout/header/header";
import { Button } from "../../components/button/button";
import { Link } from "react-router-dom";
import styles from "./orderPage.module.sass";


const OrderPage = () => {

    const handleConfirmOrder = () => {}
    return (
        <div>
            <Header />
            <Button onClick={handleConfirmOrder}>ПОДТВЕРДИТЬ ЗАКАЗ</Button>
        </div>
    );
}

export default OrderPage;