"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Credential_1 = require("../entity/Credential");
const Appointment_1 = require("../entity/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Luzdiamond",
    database: "proyectm3",
    //dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
