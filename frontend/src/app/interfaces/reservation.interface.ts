export interface IReservation {
    businessUnit: IBusinessPosition,
    reservation: Array<IReservationData>,
    defaultDate?: string,
    events: any,
    position?: any
}



export interface IReservationData {
    id_user: number,
    id_position: string,
    id_type_working_day: number,
    date_start: string,
    date_end: string
}

export interface IBusinessPosition {
    pisoId: number,
    areaId: number,
    positionId: number,
    businesUnitId: number,
}
