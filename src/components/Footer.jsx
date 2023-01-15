import React, {useState, useContext} from 'react';
import styles from '../styles/App.module.scss';
import { CartContext } from './CartContext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import '../styles/styles.css';

import CartProduct from './CartProduct';



 function Footer(props) {
    const [centredModal, setCentredModal, successModal, setSuccessModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);
    const toggleSuccess = () => setSuccessModal(!successModal);
    const cart = useContext(CartContext);
    const id = props.id;
    const emptyCart = props.emptyCart;

    const style = {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: '#F9F6F6',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [successOpen, setSuccessOpen] = React.useState(false);
    const handleSuccess = () => {
      setSuccessOpen(true);
    };
    const handleSuccessClose = () => {
      setSuccessOpen(false);
    };
  

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    
    return (
        <>
     
        

             

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        
      >
       
       <Box className={styles.list} sx={{ ...style, width: 500 , top: 500, left: 935 }}>
              {productsCount > 0 ?
              <>

               
             
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}
                <Divider />
                <p className={styles.carttotal}>Total</p>
                <p className={styles.cartdollar}> $ </p>
                <p className={styles.cartitemprice}>{cart.getTotalCost().toFixed(2)}</p>  
                
                
                </>
                
              :
              <h1>no items</h1>  

             
              }
          
          </Box>
        </Modal>
         

        <Modal
        open={successOpen}
        onClose={handleSuccessClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

          <Box className={styles.successModal} >
            <h1 className={styles.successh1}>Congratulations!</h1>
            <h1 className={styles.successp}>Your order it’s on its way.</h1>
            <button className={styles.okbutton} onClick={() => setSuccessOpen(false)}>OK</button>
        </Box>

        </Modal>
                {/* <p className={styles.carttotal}>Total</p>
                <p className={styles.cartdollar}> $ </p>
                <p className={styles.cartitemprice}>{cart.getTotalCost().toFixed(2)}</p> */}
              


              
              


          {/* <div className={styles.inmodalfooter}>
                <button onClick={toggleShow}><img src='images/shopping-basket2.png' className={styles.basket2} alt="product"></img></button>
                <p className={styles.total}>{cart.getTotalCost().toFixed(2)}</p><p className={styles.totaldollar}>$</p>
                <button className={styles.orderbutton} onClick={() => cart.deleteFromCart()}>Order Now</button>
            </div> */}
            

      <div className={styles.footerempty}>
      <div className={styles.footer}>
      <button onClick={handleOpen}><img src='images/shopping-basket2.png' className={styles.basket2} alt="product"></img></button>

                <p className={styles.total}>{cart.getTotalCost().toFixed(2)}</p><p className={styles.totaldollar}>$</p>
                <button className={styles.orderbutton} onClick={() => {cart.deleteFromCart(); handleSuccess()}}>Order Now</button>
            </div>
          
      </div>
        </>
    );


}



export default Footer;