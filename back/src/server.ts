import express from "express" //importa express desde express la dependencia
import router from "./routes/recursos"

const server = express()

server.use(express.json())//convierne el body en un objeto javascrip
server.use(router)

//module.exports = server commonjs
export default server //queremos exportar server solamente, una sola cosa