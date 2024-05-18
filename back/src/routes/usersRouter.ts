import { Router } from "express";
import { getUserById, getUsers, loginController, registerController } from "../controllers/userController";


const userRouter = Router()

userRouter.get("/", getUsers)

userRouter.get("/:id", getUserById) //param es un parametro dentro de la url
   
userRouter.post("/register", registerController)

userRouter.post("/login", loginController)

//GET/user obtener todos los usuarios
//GET/users/:id obtener un usuario por id

//post/user/register q crea un nuevo usuario

export {userRouter}