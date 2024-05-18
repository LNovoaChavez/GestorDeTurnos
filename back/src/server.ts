import express from "express" //importa express desde express la dependencia
import router from "./routes/indexRouter"
const cors = require("cors")
const morgan = require("morgan")

const server = express()

server.use(morgan("dev"))
server.use(cors())
server.use(express.json())//convierne el body en un objeto javascrip
server.use(router)

//module.exports = server commonjs
export default server 