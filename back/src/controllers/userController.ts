import { Request, Response } from "express"
import { getUsersService, createUserService, deleteUserService } from "../services/usersServices"
import IUser from "../interfaces/IUser";

export const createUser = async (req: Request, res: Response) =>{
    const {name, email, password} = req.body;
    const newUser : IUser = await createUserService({name, email, password})
    res.status(201).json(newUser)
}


export const getUsers = async () => {}
export const deleteUser = async () => {}