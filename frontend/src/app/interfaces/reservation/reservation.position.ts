import { IWorkingDay } from "../working_day/working_day"

export interface IReservationByPosition {
	date_start: string,
	date_end: string,
	working_day: IWorkingDay
}
