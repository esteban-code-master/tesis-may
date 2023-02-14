import { Component } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { IResponse } from 'src/app/interfaces/response/response'
import { AuthenticationService } from 'src/app/services/auth/authentication.service'
import { saveAs } from 'file-saver'

@Component({
	selector: 'app-reservation',
	templateUrl: './reservation.component.html',
	styleUrls: ['./reservation.component.scss']
})


export class ReservationComponent {

	public data: Array<any> = []
	public answer: Array<any> = []

	constructor(private ___api: AuthenticationService, private __cookies: CookieService){}


	ngOnInit(){
		this.___api.get_answer().subscribe((response: IResponse<any>) => {
			this.data = response.data
			console.log(response)
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
		this.___api.create_answer(this.answer).subscribe((response)=>{
			console.log(response)
			window.location.reload()
		})
	}

	delete_answer(id: number){
		this.___api.delete_answer(id).subscribe((response: IResponse<any>)=>{
			console.log(response)
			window.location.reload()
		})
	}

	generate_file(){
		console.log(this.data)
		let array: string = ""
		this.data.forEach((item: any, index: number) => {
			array += `${index + 1 }.- ${item.question} \n R: ${item.answer} \n\n\n`
		})
		var blob = new Blob([array], {type: "text/plain;charset=utf-8"})

		saveAs(blob, "testfile1.txt");
	}
}
