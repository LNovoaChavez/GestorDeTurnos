import styles from "./NavLogo.module.css"

const NavLogo = () => {
    return (
        <div className={styles.logo}>
            <h1>Soy logo</h1>
            <image src={"MyLogo"} alt="brand logo"/>
        </div>
    )
}

export default NavLogo