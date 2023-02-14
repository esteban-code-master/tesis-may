import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"
import { IBusinessUnit } from "src/app/interfaces/business_unit/business-unit.interface"
import { IResponse } from "src/app/interfaces/response/response"
import { Injectable } from "@angular/core"
import { AvailableService } from "../available/available.service"

@Injectable({
	providedIn: 'root'
})

export class BusinessUnitService extends AvailableService{

	constructor(public override http: HttpClient){
		super(http)
	}

	public get_business_unit(){
		return this.http.get<IResponse<Array<IBusinessUnit>>>(`${environment.host.api_reservation_v1}/business-unit`)
	}

	get_map_render(name: string) {
		return this.http.get<IResponse<string>>(`${environment.host.api_reservation_v1}/maps/?name=${name}`)
	}

	get_maps_assigned_user(){
		return this.http.get<IResponse<any>>(`${environment.host.api_reservation_v1}/user/maps`)
	}
}
