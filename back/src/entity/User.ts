import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: number

    
    @Column()
    credentialID: number


}