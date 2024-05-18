import { DataSource } from "typeorm"
import { User } from "../entity/User"
import { Credential } from "../entity/Credential"
import { Appointment } from "../entity/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Luzdiamond",
    database: "proyectm3",
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})