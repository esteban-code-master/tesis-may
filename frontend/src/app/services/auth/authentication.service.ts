import { HttpClient } from "@angular/common/http"
import { IAuth } from "src/app/interfaces/user/auth"
import { environment } from "src/environments/environment"
import { Injectable } from "@angular/core"
import { IResponse } from "src/app/interfaces/response/response"

@Injectable({
	providedIn:'root'
})
export class AuthenticationService {

	private readonly api = `${environment.host.api_reservation_v1}/login`

	constructor(private http: HttpClient){}

	public login( user: IAuth){

		return this.http.post<IResponse<any>>(this.api, {
			username: user.username,
			password: user.password
		})
	}

	public token_verify(){
		return this.http.post<IResponse<any>>(`${this.api}/verify`, {})
	}

	public get_question(){
		return this.http.get<IResponse<any>>(`${this.api}/question`)
	}

	public create_answer(data: any){
		return this.http.post<IResponse<any>>(`${this.api}/answer`, data)
	}

	public get_answer(){
		return this.http.get<IResponse<any>>(`${this.api}/answer`)
	}

	public delete_answer(id: number){
		return this.http.delete<IResponse<any>>(`${this.api}/answer/${id}`)
	}
}
