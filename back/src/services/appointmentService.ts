import { AppDataSource } from "../config/data-source"
import { Appointment, AppointmentStatus } from "../entity/Appointment"




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

export const getAppointmentByUserId = async (idU: number) => {
    const appointments = await AppDataSource.getRepository(Appointment).findBy({userId: idU})
    return appointments
   
}

export const cancelAppointmentService = async (id: number) => {
    const appointment = await AppDataSource.getRepository(Appointment).findOneBy({id: id})
    if(appointment){
        appointment.status = AppointmentStatus.Cancelled
        await AppDataSource.getRepository(Appointment).save(appointment)
        return "Cita cancelada"
    } else {
        return "Cita no encontrado"
    }
}

export const createNewAppointmentService = async (date: Date, time: Date, userId: number,) => {
    const newAppointment = new Appointment () 

    newAppointment.date = date
    newAppointment.time = time
    newAppointment.userId = userId

    await AppDataSource.getRepository(Appointment).save(newAppointment)
    return newAppointment
    
}