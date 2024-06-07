"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createNewAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const usersServices_1 = require("../services/usersServices");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.getAllAppointments)();
        if (appointments.length != 0)
            res.status(200).send(appointments);
        else
            res.status(404).send("Turnos no encontrados");
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = parseInt(req.params.id);
        const appointment = yield (0, appointmentService_1.getAppointmentByIdService)(appointmentId);
        if (appointment)
            res.status(200).send(appointment);
        else
            res.status(404).send("Usuario no encontrado");
    }
    catch (e) {
        res.status(500).send("Usuario no encontrado");
    }
});
exports.getAppointmentById = getAppointmentById;
const createNewAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        const user = yield (0, usersServices_1.getUserByIDService)(parseInt(userId));
        if (user) {
            const newAppointment = yield (0, appointmentService_1.createNewAppointmentService)(date, time, userId);
            res.status(200).send(newAppointment);
        }
        else {
            res.status(400).send("Datos incorrectos, ingrese usuario valido");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.createNewAppointment = createNewAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const AppointmentStatus = yield (0, appointmentService_1.cancelAppointmentService)(id);
        if (AppointmentStatus == "Cita cancelada")
            res.status(200).send(AppointmentStatus);
        else
            res.status(404).send(AppointmentStatus);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.cancelAppointment = cancelAppointment;
