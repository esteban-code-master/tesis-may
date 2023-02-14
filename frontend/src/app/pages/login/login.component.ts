import { Component } from '@angular/core'
import { IAuth } from 'src/app/interfaces/user/auth'
import { AuthenticationService } from 'src/app/services/auth/authentication.service'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { IResponse } from 'src/app/interfaces/response/response'
import { ApiStatus } from 'src/app/enum/api_status.enum'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	public show_password: boolean = true
	public loading: boolean = false
	public user: IAuth

	constructor(
		private __authentication: AuthenticationService,
		private __cookies: CookieService,
		private __router: Router,
		private __snackBar: MatSnackBar
	){
		this.user = {
			password: '',
			username: ''
		}
	}

	public authentication(){
		this.loading =  true

		this.__authentication.login(this.user).subscribe((user_response: IResponse<any>)=> {
			if(user_response.status === ApiStatus.successful){
				this.__cookies.set('token', user_response.data.token )
				this.__router.navigate(["/"])
				console.log("execute")
				return
			}
		}, (error) => {
			this.loading = false
			this.message_incorrect_credentials()
		})

	}

	private message_incorrect_credentials(){
		this.__snackBar.open('usuario o password incorrectos', 'ok', {
			horizontalPosition: "end",
			verticalPosition: "bottom",
			duration: 10
		})

		console.log("execute")
	}
}


