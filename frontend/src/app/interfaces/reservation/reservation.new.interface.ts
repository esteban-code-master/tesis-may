export interface IReservationNew {
	business_unit: 	any,
	reservation: IReservationNew | Array<IReservationNew>,
	defaultDate: any,
	events: any,
	position: any
}

export interface IReservationNewData {
	id_user?: number,
	id_position?: any,
	date_end?: any,
	date_start?: any,
	id_type_working_day?: any
}
