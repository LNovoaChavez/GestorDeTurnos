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
exports.createNewAppointmentService = exports.cancelAppointmentService = exports.getAppointmentByUserId = exports.getAppointmentByIdService = exports.getAllAppointments = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entity/Appointment");
const getAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).find();
    return appointments;
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findOneBy({ id: id });
    if (appointment)
        return appointment;
    else
        return "Cita no encontrada";
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const getAppointmentByUserId = (idU) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findBy({ userId: idU });
    return appointments;
});
exports.getAppointmentByUserId = getAppointmentByUserId;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findOneBy({ id: id });
    if (appointment) {
        appointment.status = Appointment_1.AppointmentStatus.Cancelled;
        yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).save(appointment);
        return "Cita cancelada";
    }
    else {
        return "Cita no encontrado";
    }
});
exports.cancelAppointmentService = cancelAppointmentService;
const createNewAppointmentService = (date, time, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = new Appointment_1.Appointment();
    newAppointment.date = date;
    newAppointment.time = time;
    newAppointment.userId = userId;
    yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).save(newAppointment);
    return newAppointment;
});
exports.createNewAppointmentService = createNewAppointmentService;
