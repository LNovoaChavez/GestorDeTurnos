import { AppDataSource } from "../config/data-source"
import { Appointment } from "../entity/Appointment"




export const getAllAppointments = async () => {
    const appointments = await AppDataSource.getRepository(Appointment).find()
    return appointments
}
export const getAppointmentByIdService = async (id: number) => {
    const appointment = await AppDataSource.getRepository(Appointment).findOneBy({id: id})
    if(appointment)
        return appointment
    else
    return "Cita no encontrada"
}

export const cancelAppointmentService = async (id: number) => {
    const appointment = await AppDataSource.getRepository(Appointment).findOneBy({id: id})
    if(appointment){
        appointment.status = "Cancelled"
        await AppDataSource.getRepository(Appointment).save(appointment)
        return "Cita cancelada"
    } else {
        return "Cita no encontrado"
    }
}

export const createNewAppointmentService = async (date: string, time: string, userId: number,) => {
    const newAppointment = new Appointment () 

    newAppointment.date = date
    newAppointment.time = time
    newAppointment.userId = userId
    newAppointment.status = "Active"

    await AppDataSource.getRepository(Appointment).save(newAppointment)
    return newAppointment
    
}