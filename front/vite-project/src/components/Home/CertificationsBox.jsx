import style from "./CertificationsBox.module.css"
import { FaCheck } from "react-icons/fa";


const CertificationsBox = () => {
    return (
        <div className={style.certificationsBar}>
        <div className={style.certificationsItem}>
            <FaCheck className={style.certificationsIcon}/>
            <span>Experienced Dermatologist</span>
        </div>
        <div className={style.certificationsItem}>
            <FaCheck className={style.certificationsIcon}/>
            <span>Advanced Technology</span>
        </div>
        <div className={style.certificationsItem}>
            <FaCheck className={style.certificationsIcon}/>
            <span>Personalized Treatments</span>
        </div>
        <div className={style.certificationsItem}>
            <FaCheck className={style.certificationsIcon}/>
            <span>10+ Years Experience</span>
        </div>
    </div>
    )
}

export default CertificationsBox