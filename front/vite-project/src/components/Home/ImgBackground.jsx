import style from "./ImgBackground.module.css"
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"


const ImgBackground = ()=> {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (user) {
            navigate("/newAppointment");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
        <p>Estetica y Belleza</p>
        <h1 className={style.h1}>BEAUTYHAVEN</h1>
        <div className={style.textcontainer}>
            <p className={style.text}>BeautyHaven is where your skin and soul find harmony. With exclusive products and a touch of luxury, renew your beauty and well-being with every visit. We look forward to seeing you!</p>
        </div>
        <button className={style.appButton} onClick={handleButtonClick}>Reserve an Appointment</button>
        </>
    )

}

export default ImgBackground