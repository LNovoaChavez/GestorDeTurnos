import { Router } from "express";
import { getAppointments, getAppointmentById, createNewAppointment, cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter = Router()

appointmentsRouter.get("/", getAppointments) //llama a todos los turnos

appointmentsRouter.get("/:id", getAppointmentById) //busca turne por id

appointmentsRouter.post("/schedule", createNewAppointment) //crea nuevo turne

appointmentsRouter.put("/cancel", cancelAppointment) //cancelar turno

export {appointmentsRouter}