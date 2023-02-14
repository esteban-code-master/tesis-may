import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { AvailableService } from "../available/available.service"
import { environment } from "src/environments/environment"
import { IMapsResponse } from "src/app/interfaces/maps/maps.response"

@Injectable({
  	providedIn: 'root'
})


export class MapService extends AvailableService {

	constructor(public override http: HttpClient){
		super(http)
	}

	get(name: string) {
		return this.http.get<IMapsResponse<string>>(`${environment.host.api_reservation_v1}/maps/?name=${name}`)
	}

	getBusinessUnit(){
		return this.http.get(`${environment.host.api_reservation_v1}/business-unit`)
	}
}
