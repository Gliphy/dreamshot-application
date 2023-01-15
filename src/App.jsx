import React, {useState} from 'react';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu/index';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './components/CartContext';



const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.App}>
     <CartProvider>
      <Navbar />
      <Hero />
      <Menu />
      <Footer></Footer>
     </CartProvider>
    </div>
  );
};

export default App;
