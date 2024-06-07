import styles from "./NavLogo.module.css"
import MyLogo from "../../assets/logoo.jpeg"
import { Link } from "react-router-dom"


const NavLogo = () => {
    return (
        <div className={styles.logo}>
            <Link to={"./"}>
            <img src={MyLogo} alt="brand logo"/>
            </Link>
        </div>
    )
}

export default NavLogo