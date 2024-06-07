import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={styles.navLinks}> 
          <Link to={"/"}><li>Home</li></Link> 
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/products"}><li>Products</li></Link>
          <Link to={"/treatments"}><li>Treatments</li></Link>
          <Link to={"/register"}><li>Register</li></Link>
          <Link to={"/login"}><li>Login</li></Link>
        </div>
    )
}

export default NavBar;