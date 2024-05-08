export enum AppointmentStatus {
    Active,
    Cancelled,
    Finished,
}

export interface IAppointment {
    id: string,
    date: string,
    time: string,
    userID: string,
    status: AppointmentStatus;
}

export const appointments: IAppointment []= []