import { IAppointment, appointments, AppointmentStatus } from "../interfaces/IAppointment"
import { randomUUID } from "crypto"


export const createNewAppointmentService = async (date: string, time: string, userID: string, status: AppointmentStatus) => {
    const newAppointment: IAppointment = { 
        id: randomUUID(),
        date: date,
        time: time,
        userID: userID,
        status: status,
    }
    appointments.push(newAppointment)
    
    return newAppointment
    
}

export const getAllAppointments = async (): Promise <IAppointment []> => {
    return appointments
}
export const getAppointmentById = async (id: string) => {
    const appointment : IAppointment | undefined = appointments.find((appointment: IAppointment) => appointment.id == id)
    if(appointment)
        return appointment
    else
        return "Cita no encontrada"
}

export const cancelAppointment = (id: string) => {
    const indexAppointment: number  = appointments.findIndex((appointment: IAppointment) => appointment.id == id)

    if(indexAppointment != -1) {
        appointments[indexAppointment].status = AppointmentStatus.Cancelled
        return "Cita cancelada"
    } else {
        return "Cita no encontrado"
    }
}
