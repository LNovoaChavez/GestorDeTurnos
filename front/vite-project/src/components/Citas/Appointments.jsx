import styles from "./Appointments.module.css"
import { useState } from "react";

const Appointments = ({appointmentProps}) => {


    const {id, date, time, status,} = appointmentProps

    const [errorMessage, setErrorMessage] = useState('');

    const handleCancelAppointment = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/appointments/cancel/${id}`);
            console.log('Appointment cancelled successfully:', response.data);
            // Si deseas actualizar la interfaz después de la cancelación, puedes hacerlo aquí
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('There was an error cancelling the appointment.');
            }
        }
    };

    return (
        <div>
        <div className={styles.appointmentBox}>
            <h3>Appointment</h3>
            <div className={styles.appointmentDetails}>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </div>
            <div className={styles.appointmentDetails}>
                <p>Appointment ID: {id}</p>
                <p>Status: {status}</p>
            </div>
            <div>
                <button onClick={handleCancelAppointment}>Cancel appintment</button>
            </div>
        </div>
        </div>
    )

}

export default Appointments;