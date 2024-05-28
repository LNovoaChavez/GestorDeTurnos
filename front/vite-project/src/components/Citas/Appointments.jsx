import styles from "./Appointments.module.css"

const Appointments = ({citas}) => {
    const {id, date, time, status,} = citas
    return (
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
        </div>
    )

}

export default Appointments;