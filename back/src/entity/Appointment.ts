import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


export enum AppointmentStatus {
    Active = "Active",
    Cancelled = "Cancelled",
    Finished = "Finished",
}

@Entity()

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "date"})
    date: Date;
    
    @Column({type: "time"})
    time: Date;
    
    @Column({type: "enum", enum: AppointmentStatus,default: AppointmentStatus.Active})
    status: AppointmentStatus

    @Column()
    userId: number
    
//     @ManyToOne(()=> User, user => user.appointments)

//     @JoinColumn()
//     userId: number
}