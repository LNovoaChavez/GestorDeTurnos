import TreatmentsBox from "../../components/Home/TreatmentsBox"
import ImgBackground from "../../components/Home/ImgBackground"
import style from "./Home.module.css"
import CertificationsBox from "../../components/Home/CertificationsBox"
import CustomerComments from "../../components/Home/CustomerComments"

const Home = () => {
    return(
        <>
        <div className={style.encabezadoimg}>
            <ImgBackground/>
        </div>
        <div>
            <CertificationsBox/>
        </div>
        <div>
            <TreatmentsBox/>
        </div>
        <div>
            <CustomerComments/>
        </div>
        </>
    )
}
export default Home;