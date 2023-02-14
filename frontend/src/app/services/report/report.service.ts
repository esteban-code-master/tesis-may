import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IReportDetailReservation } from "src/app/interfaces/report/report.detail"
import { IReportGeneral } from "src/app/interfaces/report/report.interface"
import { IResponse } from "src/app/interfaces/response/response"
import { environment } from "src/environments/environment"

@Injectable({
  	providedIn: 'root'
})

export class ReportService {

  	constructor(private http: HttpClient){

  	}

	get_report_general(id_business_unit: number){
		return this.http.get<IResponse<IReportGeneral>>(`${environment.host.api_reservation_v1}/report/${id_business_unit}`)
	}

	get_report_detail(business_unit_setting:
		{
			id_business_unit: number,
			status: string,
			piso?: string,
			date_start?: string,
			date_end?: string
		}
	){

		const url = `${environment.host.api_reservation_v1}/report/detail/${business_unit_setting.id_business_unit}/?`
		const params = new URLSearchParams()

		for(const [propety, value] of Object.entries(business_unit_setting)){
			if(value !== undefined && propety !== "id_business_unit"){
				params.append(propety,value as string)
			}
		}

		if(business_unit_setting.status.toString() === "0") params.delete("status")

		console.log(url.concat(params.toString()))
		return this.http.get<IResponse<Array<IReportDetailReservation>>>(url.concat(params.toString()))
	}

}
