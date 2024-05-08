import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response) => {
    res.send("Soy todos los turnos")
}

export const getAppointmentById = async (req: Request, res: Response) => {
    res.send("Soy turnocon id")

}

export const createNewAppointment = async (req: Request, res: Response) => {
    res.send("Hola soy nuevo turno")

}

export const cancelAppointment = async (req: Request, res: Response) => {
    res.send("Hola soy turno cancelado")

}