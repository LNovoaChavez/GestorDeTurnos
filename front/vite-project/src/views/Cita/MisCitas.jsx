import { useEffect } from "react"
import Appointment from "../../components/Citas/Appointments"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {fetchUserAppointment, clearAppointments} from "../../redux/userAppointmentSlice.js"
import { Link, useNavigate } from "react-router-dom"
import styles from "./MisCitas.module.css"

const MisCitas = () => {
    // const [citas, setCitas] = useState([])
    //console.log(citas)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const userAppointment = useSelector(state => state.userAppointments)
    //necesito que el usuario esté logueado
    useEffect(() => {
        if(!user){
            navigate("/")
        }else{
            console.log(user);
            console.log(user.user.id);
            dispatch(fetchUserAppointment(user.user.id))
        }
    }, [navigate, user, dispatch]) //cada vez q cambio la ruta, q el ususario se modifica o cuando la accion con el dispatch se modifica
    
    return(
        <div >
            <h1>Welcome, these are your appointments:</h1>
            <div className={styles.appointmentsContainer}>
            {userAppointment.length > 0 ? (
                    userAppointment.map((appointment) => (
                        <Appointment
                            appointmentProps={appointment}
                            key={appointment.id}
                        />
                    ))
                ) : (
                    <p className={styles.pNoApp}>
                        You don't have any Appointment scheduled yet. Click
                        on the button to schedule one
                    </p>
                )}
            </div> 
            <Link to={"../newAppointment"}>
            <button className={styles.appButton}>
                Reserve an Appointment
            </button>
            </Link>
            

        </div>
    
    )
}

export default MisCitas
