import { Request, Response } from "express";
import { cancelAppointmentService, createNewAppointmentService, getAllAppointments, getAppointmentByIdService } from "../services/appointmentService";
import { getUserByIDService } from "../services/usersServices";

export const getAppointments = async (req: Request, res: Response) => {
    try{
        const appointments = await getAllAppointments()
        if(appointments.length != 0)
            res.status(200).send(appointments)
        else
            res.status(404).send("Turnos no encontrados")
    } catch (e) {
        res.status(500).send(e)
    }
}

export const getAppointmentById = async (req: Request, res: Response) => {
    try{
        const appointmentId: number = parseInt(req.params.id)
        const appointment = await getAppointmentByIdService(appointmentId)
        if(appointment)
            res.status(200).send(appointment)
        else
            res.status(404).send("Usuario no encontrado")
    } catch (e) {
        res.status(500).send("Usuario no encontrado")
    }

}

export const createNewAppointment = async (req: Request, res: Response) => {
    try {
        const {date, time, userId} = req.body
        const user = await getUserByIDService(parseInt(userId))
        if(user){
            const newAppointment = await createNewAppointmentService(date, time, userId)
            res.status(200).send(newAppointment)
        } else {
            res.status(400).send("Datos incorrectos, ingrese usuario valido")
        }
    }catch (e) {
        res.status(500).send(e)
    }

}

export const cancelAppointment = async (req: Request, res: Response) => {
    try{
        const id: number = parseInt(req.params.id)
        const AppointmentStatus = await cancelAppointmentService(id)
        if(AppointmentStatus == "Cita cancelada")
            res.status(200).send(AppointmentStatus)
        else 
            res.status(404).send(AppointmentStatus)
    } catch (e) {
        res.status(500).send(e)
    }
}