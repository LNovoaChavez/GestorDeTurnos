import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={styles.navLinks}> 
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Treatments</a></li>
            <li><a href="#">Login</a></li> 
        </div>
    )
}

export default NavBar;