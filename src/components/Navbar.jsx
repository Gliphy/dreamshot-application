import styles from '../styles/App.module.scss';


export default function Navbar() {
    return (
        <nav className={styles.Appheader}>
          <h1 className={styles.h1}>BRUNCHY</h1>
          <ul className={styles.ul}>
            <li>    
              <a className={styles.about} href="https://www.dreamshot.bg/">About</a>
            </li>
            <li>
              <a className={styles.callus} href="https://www.dreamshot.bg/">Call us</a>
            </li>
            <li className={styles.rectangle}>
            <p className={styles.freedelivery}>Free delivery</p>
            <img src={require('../img/image1.png')} className={styles.image1} alt=""/>
            </li>

        </ul>
          
      </nav>


    );
}