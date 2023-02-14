export interface IReportDetailReservation {
	date_start: string,
	date_end: string,
	users: IReportDetailUser,
	working_day: IReportDetailTypeWorkingDay,
	position: IReportDetailPosition,
	status: IReportDetailStatus
}

export interface IReportDetailUser {
	full_name: string,
	collaborator_number: string
}

export interface IReportDetailTypeWorkingDay {
	name: string
}

export interface IReportDetailBusinessUnit {
	name: string
}

export interface IReportDetailPisos {
	name: string,
	description: string,
	business_unit: IReportDetailBusinessUnit
}

export interface IReportDetailStatus {
	name: string,
	description: string,
	id?: number
}

export interface IReportDetailArea {
	name: string,
	description: string,
	pisos: IReportDetailPisos
}


export interface IReportDetailPosition {
	key: string,
	name: string,
	area: IReportDetailArea
}

