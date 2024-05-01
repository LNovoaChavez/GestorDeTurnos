import { Router, Request, Response} from 'express';
import { createUser, getUsers, deleteUser } from '../controllers/userController';

const router: Router = Router()

interface IRecurso {
    id: string,
    nombre: string,
}

router.post("/users", createUser)

router.get("/users")


router.delete("/users")

export default router