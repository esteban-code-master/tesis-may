import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IResponse } from "src/app/interfaces/response/response"
import { IUser } from "src/app/interfaces/user/user.interface"
import { environment } from "src/environments/environment"

@Injectable({
  	providedIn: 'root'
})

export class UserService {

  	constructor(private http: HttpClient){

  	}

	autocomplete( user: string ){

		return this.http.post<IResponse<Array<IUser>>>(
			`${environment.host.api_reservation_v1}/user/autocomplete`,
			{
				name: user
			}
		)
	}

	locationUser( userID: number, date: string ){
		const url = `${environment.host.api_reservation_v1}/user/location/${userID}?date=${date}`
		return this.http.get<IResponse<IUser>>(url)
	}
}
