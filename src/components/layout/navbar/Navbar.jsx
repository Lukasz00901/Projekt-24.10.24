import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.homebtn}>Home</button>
      <button className={styles.aboutbtn}>Über Uns</button>
      <button className={styles.servicesbtn}>Services</button>
      <button className={styles.contactbtn}>Kontakt</button>
    </div>
  );
}

export default Navbar;
