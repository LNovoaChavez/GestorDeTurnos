import {IUser, users} from "../interfaces/IUser"
import UserDto from "../dto/UserDto";
import { randomUUID } from "crypto";
import { createCredential } from "./credentialsService";

let userss : IUser [] = [{
    id: randomUUID(),
    name: "Luz",
    email: "luznov@gmail.com",
    birthdate: "21/21/2000",
    nDni: 1234567,
    credentialsID: randomUUID()

}
]


//una funcion async siempre retornauna promsesa que se resuelve como un IUser
export const createUserService = async (name: string, email: string, birthdate: string, nDni: number, password: string) =>{ 
    const idCredentials = await createCredential(name, password)
    const newUser: IUser = {
    id: randomUUID(),
    name: name,
    email: email,
    birthdate: birthdate,
    nDni: nDni,
    credentialsID: idCredentials,
    }
    users.push(newUser)
    //id++
    return newUser


    //le indicamos ts que cuando el controlador llame a esta funcion de srrvicios se tieneque asegurar que el objeto que le manda comoa rgumento cumpla con la interface userDto.

}
export const getUsersService = async (): Promise <IUser[]> => { //me retorna una promesa que se resuelve a un IUser array
    return users
}

export const getUserByIDService = async (id: string) => {
    const user: IUser | undefined = users.find((user: IUser) => user.id == id)
    if(user)
        return user
    else
        return "Usuario no encontrado"
}


// export const deleteUserService = async (id: number): Promise <void> => { //no retorna nada
//     users = users.filter((user: IUser) => {
//         return user.id !== id
//     })
// }