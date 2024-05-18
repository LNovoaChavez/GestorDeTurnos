import { AppDataSource } from "../config/data-source";
import { Credential } from "../entity/Credential";


export const validateCredential = async (username: string, password: string) => { 
    //manager
    const credential = await AppDataSource.getRepository(Credential).findOneBy({username: username})
    if(credential) {
        return credential.password == password ? credential.id: "Contraseña no valida"
    } else {
        return "Usuario no existe"
    }
}


export const createCredential = async (username: string, password: string) => {
    const newCredential = new Credential () 

    newCredential.username = username
    newCredential.password = password

    await AppDataSource.getRepository(Credential).save(newCredential)
    return newCredential.id

}
