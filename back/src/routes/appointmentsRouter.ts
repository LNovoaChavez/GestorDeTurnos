import { Router } from "express";
import { getAppointments, getAppointmentById, createNewAppointment, cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter = Router()

appointmentsRouter.get("/", getAppointments) //llama a todos los turnos

appointmentsRouter.get("/:id", getAppointmentById) //busca turno por id

appointmentsRouter.put("/cancel/:id", cancelAppointment) //cancelar turno

appointmentsRouter.post("/schedule", createNewAppointment) //crea nuevo turne

export {appointmentsRouter}
