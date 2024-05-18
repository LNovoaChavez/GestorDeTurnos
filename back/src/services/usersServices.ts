
import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import { createCredential } from "./credentialsService";


export const getUsersService = async () => { 
    const users = await AppDataSource.getRepository(User).find()
    return users
}


export const getUserByIDService = async (id: number) => {
    const user = await AppDataSource.getRepository(User).findOneBy({id: id})
    if(user)
        return user
    else
    return "User no encontrada"
}

export const getUserByCredentialService = async (idC: number) => {
    const user = await AppDataSource.getRepository(User).findOneBy({credentialID: idC})
    if(user)
        return user
    else
    return "User no encontrada"
}


//una funcion async siempre retornauna promsesa que se resuelve como un IUser
export const createUserService = async (name: string, email: string, birthdate: string, nDni: number, username: string, password: string) =>{ 
    const newUser = new User () 

    newUser.name = name
    newUser.email = email
    newUser.birthdate = birthdate
    newUser.nDni= nDni
    newUser.credentialID= await createCredential(username, password)

    await AppDataSource.getRepository(User).save(newUser)
    return newUser
}