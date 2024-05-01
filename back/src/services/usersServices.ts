import IUser from "../interfaces/IUser"
import UserDto from "../dto/UserDto";

const users : IUser [] = []

let id: number = 1;

//una funcion async siempre retornauna promsesa que se resuelve como un IUser
export const createUserService = async (userData: UserDto) : Promise <IUser> =>{ //le indicamos ts que cuando el controlador llame a esta funcion de srrvicios se tieneque asegurar que el objeto que le manda comoa rgumento cumpla con la interface userDto.

    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        password: userData.password,
    }
    users.push(newUser)
    id++
    return newUser

}
export const getUsersService = async () => {}


export const deleteUserService = async () => {}