import axios from "axios";
import style from "./Appointment.module.css"; // Asegúrate de crear y definir los estilos en este archivo
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Appointment = () => {
    const formRef = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    const userId = useSelector(state => state.user.user.id)
    console.log(userId);


    const handleCreateAppointment = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const selectedDate = new Date(formData.get("date"));
        const today = new Date();

        // Remove time part from current date to compare only the date part
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            setErrorMessage("The selected date cannot be in the past.");
            return;
        }

        const appointmentData = {
            date: formData.get("date"),
            time: formData.get("time"),
            userId: userId
        };

    
        try {
            const response = await axios.post("http://localhost:3000/appointments/schedule", appointmentData);
            console.log("Appointment created successfully:", response.data);
            setErrorMessage(""); 
        } catch (error) {
            console.error("Error creating appointment");
            setErrorMessage("There was an error creating the appointment.");
        }
    };
    return (
        <div className={style.createAppointmentContainer}>
            <h2>Create Appointment</h2>
            <form ref={formRef} onSubmit={handleCreateAppointment}>
                <div>
                    <label>Date: </label>
                    <input type="date" name="date" required />
                </div>
                <div>
                    <label>Time: </label>
                    <input type="time" name="time" required />
                </div>

                <button type="submit">Create Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;