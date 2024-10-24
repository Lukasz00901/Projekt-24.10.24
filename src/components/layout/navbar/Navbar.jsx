import styles from "./Navbar.module.css";
import { BrowserRouter as Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.homebtn}>Home</button>
      <Link to="/impressum">Impressum</Link>;
      <Link to="/impressum">Datenschutz</Link>
    </div>
  );
}

export default Navbar;
