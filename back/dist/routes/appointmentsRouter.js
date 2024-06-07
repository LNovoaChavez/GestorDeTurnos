"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRouter = void 0;
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const appointmentsRouter = (0, express_1.Router)();
exports.appointmentsRouter = appointmentsRouter;
appointmentsRouter.get("/", appointmentController_1.getAppointments); //llama a todos los turnos
appointmentsRouter.get("/:id", appointmentController_1.getAppointmentById); //busca turno por id
appointmentsRouter.put("/cancel/:id", appointmentController_1.cancelAppointment); //cancelar turno
appointmentsRouter.post("/schedule", appointmentController_1.createNewAppointment); //crea nuevo turne
