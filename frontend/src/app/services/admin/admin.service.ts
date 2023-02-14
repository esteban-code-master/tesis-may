import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"
import { Injectable } from "@angular/core"
import { IResponse } from "src/app/interfaces/response/response"
import { AssignedPermission } from "src/app/interfaces/admin/assigned.permission"

@Injectable({
	providedIn:'root'
})
export class AdminService {

	private readonly api = `${environment.host.api_reservation_v1}/admin`

	constructor(private http: HttpClient){}

	public get_location_assigned(){
		return this.http.get<IResponse<any>>(`${this.api}/assigned`)
	}

	public create_assigned_user(user_assigned: AssignedPermission){
		return this.http.post<IResponse<any>>(`${this.api}/assigned`, user_assigned)
	}
}
