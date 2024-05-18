import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum AppointmentStatus {
    Active,
    Cancelled,
    Finished,
}

@Entity()

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string
    
    @Column()
    time: string

    @Column()
    userId: number

    @Column()
    status: string
    
}