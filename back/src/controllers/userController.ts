import { Request, Response } from "express"
import { getUsersService, createUserService, getUserByIDService, getUserByCredentialService } from "../services/usersServices"
import { validateCredential } from "../services/credentialsService"
import { validarEmail } from "../helpers/validaciones"
import { getAppointmentByUserId } from "../services/appointmentService"


export const getUsers = async (req: Request, res: Response) => {
    try{
         const users = await getUsersService()
         if(users.length != 0)
              res.status(200).json(users)
         else 
             res.status(404).send("No se encontraron usuarios")

    } catch (e) {
        res.status(500).send(e)
    }
 }

 export const getUserById = async (req: Request, res:Response) => {
    try{
        const userId: number = parseInt(req.params.id)
        const user = await getUserByIDService(userId)
        if(user){
            const appointments = await getAppointmentByUserId(userId)
            const userData = 
            {
                ...user,
                appointments: appointments
            }  
            res.status(200).send(userData) //cambia forma de visualizar datos
            
        } else {
            res.status(404).send("Usuario no encontrado")
        }
    }catch (e) {
        res.status(500).send(e)
    }
 }

export const registerController = async (req: Request, res: Response) => {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body
        if(validarEmail(email)){
            const newUser = await createUserService(name, email, new Date(birthdate), nDni, username, password)
            res.status(200).send(newUser)
        } else {
            res.status(400).send("Datos ingresados son incorrectos")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

export const loginController = async (req: Request, res: Response) => {
    try{
        const{ username, password} = req.body

        const validate = await validateCredential(username, password)

        if(validate == "Contraseña no valida" || validate == "Usuario no existe") {
            res.status(400).send(validate)
        } else {
            const user = await getUserByCredentialService(validate)
            const response = {
                login: true,
                user: {
                    user
                }
            }
            res.status(200).send(response)
        }
    } catch(e) {
        res.status(500).send(e)
    }
}