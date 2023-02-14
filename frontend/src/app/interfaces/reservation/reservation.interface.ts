import { IWorkingDay } from "../working_day/working_day"

export interface IReservationByUser {
	total_register: number,
	reservation: Array<IReservationByUserData>
}

export interface IReservationByUserData {
	reservation_id: number,
	full_name: string,
	booking_position: string,
	booking_business_unit: string,
	booking_piso: string,
	booking_area?: string,
	booking_status: IReservationStatus,
	type_working_day: IWorkingDay,
	date_start: string,
	date_end: string,
	is_modify: boolean,
	resource?: any
}


export interface IReservationStatus {
	id: number,
	name: string,
	description: string
}
