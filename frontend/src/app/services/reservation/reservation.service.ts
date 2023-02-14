import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { AvailableService } from "../available/available.service"
import { environment } from "src/environments/environment"
import { IResponse, IUpdateHttp } from "src/app/interfaces/response/response"
import { IPager } from "src/app/interfaces/pager/pager"
import { IReservationByUser, IReservationByUserData } from "src/app/interfaces/reservation/reservation.interface"
import { IFilterUser } from "src/app/interfaces/table/filter.user"
import { IFilterReservationPosition } from "src/app/interfaces/reservation/filter.position"
import { IReservationByPosition } from "src/app/interfaces/reservation/reservation.position"

@Injectable({
  	providedIn: 'root'
})

export class ReservationService extends AvailableService {

	constructor(public override http: HttpClient){
		super(http)
	}

	generate( reservation: any ) {
		const url = `${environment.host.api_reservation_v1}/reservation/generate`
		return this.http.post<IResponse<any>>(url,reservation)
	}

	get_by_user( pager: IPager<IFilterUser> ) {

		const url = `${environment.host.api_reservation_v1}/reservation/user/?page=${pager.page}&size=${pager.size}&`
		const params = new URLSearchParams()
		for(const [propety, value] of Object.entries(pager.data as keyof typeof pager.data)){
			if(value !== undefined && propety !== "filter"){
				params.append(propety,value as string)
			}
		}

		return this.http.get<IResponse<IReservationByUser>>(url.concat(params.toString()))
	}

	get_availability_by_position(filter: IFilterReservationPosition){

		const url = `${environment.host.api_reservation_v1}/availability/${filter.position_key}/?`
		const params = new URLSearchParams()
		params.append("date_start", filter.date_start)
		params.append("date_end",filter.date_end)

		return this.http.get<IResponse<Array<IReservationByPosition>>>(url.concat(params.toString()))
	}

	get_reservation_next(){
		const url = `${environment.host.api_reservation_v1}/reservation/next`
		return this.http.get<IResponse<Array<IReservationByUserData>>>(url)
	}

	set_status_canceled( reservationID: number ){
		const url = `${environment.host.api_reservation_v1}/reservation/canceled/${reservationID}`
		return this.http.put<IResponse<IUpdateHttp>>(url,null)
	}

	set_status_used( reservationID: number ){
		const url = `${environment.host.api_reservation_v1}/reservation/check-in/${reservationID}`
		return this.http.put<IResponse<IUpdateHttp>>(url,null)
	}
}

