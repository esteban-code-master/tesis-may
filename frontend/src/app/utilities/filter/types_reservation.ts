import { working_day_enum } from "src/app/enum/type_working_day.enum"

export const is_reservation_fullday = (type_reservation: string, callback: Function = ()=> {}) => {
	const is_full_day = type_reservation === working_day_enum.fullday
	if(is_full_day){
		callback()
	}
	return is_full_day
}


export const is_reservation_multiple = (target: HTMLElement, renderer: any ,type_reservation: string, callback: Function = ()=> {}) => {
	if(type_reservation === working_day_enum.afternoon || type_reservation === working_day_enum.morning){
		const { reservationMultiple = 0 } = target.dataset
		let count_reservation = Number(reservationMultiple)
		count_reservation = count_reservation +  1
		if(count_reservation === 2 ){
			callback()
			return
		}

		renderer.setAttribute(target,'data-reservation-multiple', count_reservation.toString())
	}
}

export const is_reservation_morning = (target: HTMLElement,type_reservation: string, callback: Function = ()=> {}) => {
	const { reservationMultiple = 0 } = target.dataset

	if(type_reservation === working_day_enum.morning && Number(reservationMultiple) === 1){
		callback()
	}
}

export const is_reservation_afternoon = (target: HTMLElement,type_reservation: string, callback: Function = ()=> {}) => {
	const { reservationMultiple = 0 } = target.dataset
	if(type_reservation === working_day_enum.afternoon && Number(reservationMultiple) === 1){
		callback()
	}
}
