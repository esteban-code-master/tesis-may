export interface IMapsResponse<data> {
	status: number,
	data: data
}

export interface IMapsAvailability{
	days_assigned?: Array<number>,
	availability?: Array<IMapsAvailabilityOptions>
}

export interface IMapsAvailabilityOptions{
	key: string,
	name: string,
	id_area: number,
	reservation: Array<IMapsAvailabilityReservation>
}

export interface IMapsAvailabilityReservation {
	date_start: string,
	date_end: string,
	working_day: any
}
