import NavLogo from "./NavLogo"
import NavBar from "./NavBar"
import style from "./NavMain.module.css"


const NavMain =() => {
    return(
        <header className={style.header}>
        <NavLogo/> 
        <NavBar/>
        </header>
    )
}

export default NavMain