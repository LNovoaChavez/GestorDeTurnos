import style from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer =() => {
    return (
        <footer className={style.footer}>
            <div className={style.sociallink}>
                <a href="https://facebook.com">
                    <FaFacebookSquare className={style.sociallinksIcon}/>
                </a>
                <a href="https://twitter.com">
                   <FaTwitterSquare className={style.sociallinksIcon}/>

                <a href="https://instagram.com">
                    <FaInstagramSquare className={style.sociallinksIcon} />
                </a>
                </a>
            </div>
            <p>© 2024 BH Company. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer