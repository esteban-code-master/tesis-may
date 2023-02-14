import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { IResponse } from 'src/app/interfaces/response/response'
import { AuthenticationService } from 'src/app/services/auth/authentication.service'


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})


export class MapsComponent {

	public data: Array<any> = []
	public answer: Array<any> = []

	constructor(private ___api: AuthenticationService, private __cookies: CookieService){}


	ngOnInit(){
		this.___api.get_question().subscribe((response: IResponse<any>) => {
			this.data = response.data
		})
	}




	insert_answer(event: any, id_question: number){
		const value = event.target.value

		const found = this.answer.find((item: any) => {

			if(item?.id_question === id_question){
				item.answer = value
			}

			return item?.id_question === id_question
		})

		if(!found){
			this.answer.push({
				id_user: this.get_current_user(),
				id_question: id_question,
				answer: value
			})
		}
	}

	get_current_user(): string{
		const token = this.__cookies.get('token')
		const payload = token.split('.')[1]
		const values = atob(payload)
		const decode_token = JSON.parse(values)

		return decode_token.id_user
	}

	save_answer(){
		this.___api.create_answer(this.answer).subscribe((reponse)=>{
			console.log(reponse)
			window.location.reload()
		})
	}

}
