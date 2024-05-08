import {ICredential, credentials} from "../interfaces/ICredential";
import { randomUUID } from "crypto";


export const createCredential = async (username: string, password: string) => {
    const newCredential : ICredential = {
        id: randomUUID(),
        username: username,
        password: password
    }
    credentials.push(newCredential)
    return newCredential.id
}

export const validateCredential = (username: string, password: string) => { 
    const credential: ICredential | undefined = credentials.find((cre) => cre.username == username)
    if(credential) {
        credential.password == password ? credential.id: "Contraseña no valida"
    } else {
        return "Usuario no existe"
    }
}
