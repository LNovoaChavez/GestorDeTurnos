import server from "./server"
import { PORT } from "./config/envs"
import router from "./routes/recursos"


server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
}) 

