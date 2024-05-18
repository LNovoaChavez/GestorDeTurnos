import { Router, Request, Response} from 'express';
import { userRouter } from './usersRouter';
import { appointmentsRouter } from './appointmentsRouter';

const router: Router = Router()

router.use("/users", userRouter)
router.use("/appointments", appointmentsRouter)



//router.post("/users", createUser)
//router.get("/users", auth, getUsers) //cuando haga la peticon pasa primero por md



export default router