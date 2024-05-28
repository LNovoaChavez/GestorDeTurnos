import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";


@Entity({
    name: "users"
})
@Unique(["email"]) //para q mail sea unico
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column({type: "date"})
    birthdate: Date

    @Column()
    nDni: number

    @OneToMany(()=> Appointment, appointment => appointment.userId)
    appointments: Appointment[]
    
    @OneToOne (()=> Credential, credential => credential.id )

    @JoinColumn()
    credentialID: number


}