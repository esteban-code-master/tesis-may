import { Component, EventEmitter, Input, Output } from '@angular/core';
import moment  from 'moment';
import { IReservationByUserData } from 'src/app/interfaces/reservation/reservation.interface';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent {

	@Input() data: Array<IReservationByUserData> = []
	@Output() checkIn = new EventEmitter<number>

	public date_now: string

	constructor(){
		this.date_now = moment().locale("es").format("dddd D [de] MMMM")
	}

	set_check_in( reservationID: number ){
		this.checkIn.emit(reservationID)
	}

}
