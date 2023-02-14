export interface IReportReservation {
	name: string,
	used: number,
	canceled: number,
	no_verified: number
}

export interface IReportGeneral {
	reservation: IReportCountReservation,
	position: IReportCountPosition
	users: Array<IReporCountUserReservation>
}

export interface IReportCountReservation {
	total: ICountReservation,
	used: ICountReservation
	canceled: ICountReservation,
	not_verified: ICountReservation
}

export interface ICountReservation {
	count: number,
	porcent: number
}

export interface IReportCountPosition {
	rotary: number,
	not_rotary: number
}

export interface IReporCountUserReservation {
	id: number,
	name: string,
	used: number
	canceled: number,
	not_verified: number
}
