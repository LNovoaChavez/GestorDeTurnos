import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(["username"])
@Entity()

export class Credential {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username: string

    @Column()
    password: string
    
}