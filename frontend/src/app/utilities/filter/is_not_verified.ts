import moment from "moment"
import { Reservation_status } from "src/app/enum/reservation_status"
import { IReportDetailReservation } from "src/app/interfaces/report/report.detail"

export const is_status_not_verified = (item: IReportDetailReservation): IReportDetailReservation => {

	const is_date_expired = moment(item.date_start).isBefore(moment())
	if(item.status.id === Reservation_status.pending && is_date_expired){
		item.status.name = "not_verified"
		item.status.description = "no se presento"
		item.status.id = Reservation_status.not_verified
	}

	return item
}
