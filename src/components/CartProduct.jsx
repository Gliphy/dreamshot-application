import Button from 'react-bootstrap/Button';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getMenuItemsData } from "./Menu/data";
import styles from "../styles/App.module.scss";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getMenuItemsData(id);
    const emptyCart = props.emptyCart;


    return (
        <>
            <p className={styles.cartname}>{productData.name}</p>

        
            <p className={styles.cartdollar}>$</p>
            <p className={styles.cartitemname}>  </p>
            <p className={styles.cartitemprice}>{ (quantity * productData.price).toFixed(2) }</p>
        

            
        </>
    )
}

export default CartProduct;