 export interface IUser {
    id: string,
    name: string,
    email: string,
    birthdate: string,
    nDni: number,
    credentialsID: string, 
}

export const users: IUser [] = []