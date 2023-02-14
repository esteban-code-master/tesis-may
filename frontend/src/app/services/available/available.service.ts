import { HttpClient } from "@angular/common/http"
import { Moment } from "moment"
import { IMapsAvailability, IMapsResponse } from "src/app/interfaces/maps/maps.response"
import { environment } from "src/environments/environment"

export class AvailableService {

	private endpoint: string

	constructor(public http: HttpClient){
		this.endpoint = "availability"
	}

  	public get_position_availability(date_start: Moment, date_end: Moment ) {

		const url = `${environment.host.api_reservation_v1}/${this.endpoint}/?date_start=${date_start.format("YYYY-MM-DD")}&date_end=${date_end.format("YYYY-MM-DD")}`
    	return this.http.get<IMapsResponse<IMapsAvailability>>(url)

  	}
}
