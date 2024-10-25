import React from 'react';
import styles from "./Footer.module.css";
//import { Link } from 'react-router-dom';

function Footer() {
  return (
     <div className={styles.footer}>
      
       <footer>
       <p>&copy; 2024 Lukas, Jeffrey, Ivonne, Muditha, Stefan & Masko. Alle Rechte vorbehalten</p>
      <a href="/impressum">Impressum</a> | <a href="/Datenschutz">Datenschutz</a>   
          {/*  <Link to="/impressum">Impressum</Link> | <Link to="/Datenschutz">Datenschutz</Link> */}
       </footer> 
        </div>
  );
}

export default Footer;



