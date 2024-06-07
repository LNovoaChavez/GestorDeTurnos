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
exports.loginController = exports.registerController = exports.getUserById = exports.getUsers = void 0;
const usersServices_1 = require("../services/usersServices");
const credentialsService_1 = require("../services/credentialsService");
const validaciones_1 = require("../helpers/validaciones");
const appointmentService_1 = require("../services/appointmentService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersServices_1.getUsersService)();
        if (users.length != 0)
            res.status(200).json(users);
        else
            res.status(404).send("No se encontraron usuarios");
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const user = yield (0, usersServices_1.getUserByIDService)(userId);
        if (user) {
            const appointments = yield (0, appointmentService_1.getAppointmentByUserId)(userId);
            const userData = Object.assign(Object.assign({}, user), { appointments: appointments });
            res.status(200).send(userData); //cambia forma de visualizar datos
        }
        else {
            res.status(404).send("Usuario no encontrado");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.getUserById = getUserById;
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        if ((0, validaciones_1.validarEmail)(email)) {
            const newUser = yield (0, usersServices_1.createUserService)(name, email, new Date(birthdate), nDni, username, password);
            res.status(200).send(newUser);
        }
        else {
            res.status(400).send("Datos ingresados son incorrectos");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const validate = yield (0, credentialsService_1.validateCredential)(username, password);
        if (validate == "Contraseña no valida" || validate == "Usuario no existe") {
            res.status(400).send(validate);
        }
        else {
            const user = yield (0, usersServices_1.getUserByCredentialService)(validate);
            const response = {
                login: true,
                user: {
                    user
                }
            };
            res.status(200).send(response);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.loginController = loginController;
