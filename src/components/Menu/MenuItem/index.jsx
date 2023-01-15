import styles from '../../../styles/App.module.scss';
import { MenuItemsData } from '../data';
import React  , {useContext} from "react";
import { motion } from 'framer-motion';
import { CartContext } from '../../CartContext';

const MenuItem = ({ item, handleClick }) => {
    const {id,name,caption,price,image} = item;
    const cart = useContext(CartContext);
    const ProductQuantity = cart.getProductQuantity(item.id);
    console.log(cart.items);

    return (
        <>
        <motion.div className="carousel">
    <div className='' >
        <img className={styles.productimage} src={image} alt='item' />
     <div className={styles.productheader}>
        <p className={styles.productname}>{name}</p>
        <p className={styles.productcaption}>{caption}</p>
     </div>
     <div className={styles.productfooter}>
        <span>
            <p className={styles.productdollar}>$</p>
            <p className={styles.productprice}>  </p>
            <p className={styles.productprice}>{price}</p>
        </span>
     
        <br></br><br></br>
        
        
          <button className={styles.basketicon} onClick={() => cart.addOneToCart(id)} > <img className={styles.basket} src='images/shopping-basket.png'></img></button>  
    </div>
    </div>

    </motion.div>
        </>
    );
}; 



export default MenuItem;