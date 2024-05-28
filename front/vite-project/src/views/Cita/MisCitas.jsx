import { useEffect, useState } from "react"
import Appointments from "../../components/Citas/Appointments"
import axios from "axios"
import styles from "./MisCitas.module.css"

const MisCitas = () => {
    const [citas, setCitas] = useState([])
    //console.log(citas)

    useEffect(() => {
        //peticion
        axios.get("http://localhost:3000/appointments")
        .then((response) => setCitas(response.data)) 
        .catch((error) => console.error("Error fetching appointments:", error));
   
    }, [])

    return(
        <div>
            <h1>HOLA SOY TURNOS</h1>
            <div className={styles.appointmentsContainer}>
                {citas.map((citas) => {
                return <Appointments key={citas.id} citas = {citas}/> 
                })} 
            </div> 

        </div>
    
    )
}

export default MisCitas
