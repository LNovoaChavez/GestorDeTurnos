// import { Request, Response } from "express"
// import { getUsersService, createUserService, deleteUserService } from "../services/usersServices"
// import IUser from "../interfaces/IUser";

// export const createUser = async (req: Request, res: Response) =>{
//     const {name, email, password} = req.body;
//     const newUser : IUser = await createUserService({name, email, password})
//     res.status(201).json(newUser)
// }


// export const getUsers = async (req: Request, res: Response) => {
//     const users: IUser[] = await getUsersService()
//     res.status(200).json(users)
// }

// export const getUserById = async (req: Request, res:Response) => {
//     const {id} = req.params;
//     res.send(id)
    
//     // const user = await usersServices.getUserByID(id) //siempre await
//     // res.status(200).json(user)
// }

// export const deleteUser = async (req: Request, res: Response) => {
//     const {id} = req.body
//     await deleteUserService(id)
//     res.status(200).json({message: "Eliminado correctamente"})
// }