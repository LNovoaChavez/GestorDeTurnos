import { randomUUID } from "crypto"

export interface ICredential {
    id: string,
    username: string,
    password: string,
}

export const credentials : ICredential [] = []