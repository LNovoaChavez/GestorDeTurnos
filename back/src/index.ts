import server from "./server"
import { PORT } from "./config/envs"
import router from "./routes/indexRouter"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"



AppDataSource.initialize()
.then(res => {
    console.log("concexion a la base de datos con exito")
    server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`)
    }) 
})

//base de datos debe existir previo a la inicializacion 



