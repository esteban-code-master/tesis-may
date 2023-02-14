import { Component, Output, EventEmitter } from '@angular/core'
import { IResponse } from 'src/app/interfaces/response/response'
import { IUser } from 'src/app/interfaces/user/user.interface'
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-autocomplete-user',
  templateUrl: './autocomplete-user.component.html',
  styleUrls: ['./autocomplete-user.component.scss']
})
export class AutocompleteUserComponent {

	public max_user_name_length: number = 35
  	public user_list: Array<IUser> = []
	@Output() select: EventEmitter<IUser>

	constructor(private user_serice: UserService){
		this.select = new EventEmitter<IUser>()
	}

	searchUser(event: Event){

		const user = ( event.target as HTMLInputElement ).value?.trim()
		const isAllow = ( user !== "" && user.length < this.max_user_name_length )

		if(isAllow){
			this.user_serice.autocomplete(user).subscribe(( user_response: IResponse<Array<IUser>> ) => {
				this.user_list = user_response.data
			})

			return
		}

		this.user_list = []
		this.select.emit()
	}


	selectUser( userID: IUser ){
		this.select.emit( userID )
	}

}
