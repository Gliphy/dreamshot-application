import styles from '../../styles/App.module.scss';
import { MenuItemsData } from './data.js';
import '../../styles/app.css';
import React, {useState} from "react";
import MenuItem from './MenuItem/index';
import CartContext from '../CartContext';
import { motion } from 'framer-motion';


    const Menu = () => {
        const [cart, setCart] = useState([]);


        const handleClick = (item) => {
            setCart([...cart, item]);
            console.log(cart);
        };

        return (
            <>
            <motion.div className={styles.carousel}>
                <motion.div drag="x" dragConstraints={{right:0, left:-800}} className={styles.innercarousel}>
                        {MenuItemsData.map((item) => {
                        return (
                          <motion.div className={styles.product}>
                            <MenuItem key={item.id} item={item} handleClick={handleClick}/>
                          </motion.div>
                           
                        );
                    })}

                </motion.div>
    
            </motion.div>
    
            <CartContext/>
    
            </>
    
        );
    
    };

    
export default Menu;



