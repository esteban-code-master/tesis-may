import { Component, Input } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSelectChange } from '@angular/material/select'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { Moment } from 'moment'
import { EventImpl } from '@fullcalendar/core/internal'
import { working_day_enum } from 'src/app/enum/type_working_day.enum'


@Component({
	selector: 'app-reservation-modal',
	templateUrl: './reservation-modal.component.html',
	styleUrls: ['./reservation-modal.component.scss']
})
export class ReservationModalComponent {

	@Input()
	public saveReservation !: Function
	@Input()
	public positionSelect !: string
	public is_multiple_working_day:boolean = false
	private working_day: Record<string, number | undefined >
	public reservation !: any
	public select_working_day !: string


	constructor(public dialogRef: MatDialogRef<ReservationModalComponent>) {
		this.working_day = {
			"none": undefined,
			"JRNDFULL": 1,
			"JRNDMTN": 2,
			"JRNDVPT": 3
		}
	}

	changesWorkingDay( change: MatCheckboxChange ){
		this.reservation.reservation = []
	}

	private set_props_event = ({ date_start, date_end, working_day }: any ) => {
		return {
			title: "P1 S-0001 VESPETINA",
			start: date_start,
			extendedProps: {
				type_event: "@event/new",
				working_day: working_day,
				date_end: date_end
			}
		}
	}

	selectDate({ date_end , date_start }: { date_end: string, date_start: string }, working_day_type: string ){

		const is_exist = this.reservation.events.some(( event: any ) => {
			const is_exist = event.extendedProps["working_day"] === working_day_type && event.extendedProps["type_event"] === "@event/new"

			if(is_exist){
				event.start = date_start
				event.extendedProps.date_end = date_end
			}

			return is_exist
		})

		if(!is_exist){
			const new_event = this.set_props_event({
				date_start: date_start,
				date_end: date_end,
				working_day: working_day_type
			})

			this.reservation.events.push(new_event)
		}
	}



	public change_working_day( change: MatSelectChange ){

		this.reservation.reservation.find(( item: any ) =>{
			if(item.key === '@type/none'){
				item.id_type_working_day = this.working_day[this.select_working_day]
			}
		})
	}


	private filter = ( date: Moment, select_working_day: string ): boolean => {

		const list_event: Array<EventImpl> = this.reservation.events
		const found_event: Array<EventImpl> = list_event.filter(( event: EventImpl ) => {
			return date.isSameOrAfter(event.start) && date.isSameOrBefore(event.extendedProps["date_end"])
		})

		const is_open_form_reservation = found_event.length === 2  || found_event.some(( event: any ) => {

			const is_disabled_fullday = event.extendedProps["working_day"] === working_day_enum.fullday
			const is_event_diferent_select = event.extendedProps["working_day"] === select_working_day
			const is_one_event_for_fullday =  select_working_day === working_day_enum.fullday

			return is_disabled_fullday || is_event_diferent_select || is_one_event_for_fullday
		})


		return !is_open_form_reservation
	}

	public filter_working_miltiple  = ( date: Moment ) => this.filter( date, this.select_working_day )
	public filter_working_fullday   = ( date: Moment ) => this.filter( date, working_day_enum.fullday )
	public filter_working_morning   = ( date: Moment ) => this.filter( date, working_day_enum.morning )
	public filter_working_afternoon = ( date: Moment ) => this.filter( date, working_day_enum.afternoon )

	public dateClass = (cellDate: Moment, view: string ) => {

		// Only highligh dates inside the month view.


		// if (view === 'month') {
		//   const date = cellDate

		//   // Highlight the 1st and 20th day of each month.
		//   return date === 1 || date === 29 ? 'example-custom-date-class' : '';
		// }

		const filter = this.reservation.events.find( (item: any) => {


			return cellDate.isSame(item.start)
		})


		//return filter ? 'example-custom-date-class' : 'example-custom-date-class-1';
		return ""
	}


  	save_reservation(){

		this.reservation.events.forEach((item: EventImpl) => {
			const is_new_reservation = item.extendedProps["type_event"] === "@event/new"

			if(is_new_reservation){

				this.reservation.reservation.push({
					id_user: 2,
					id_position: this.positionSelect,
					id_type_working_day: this.working_day[item.extendedProps["working_day"]],
					date_start: item.start,
					date_end: item.extendedProps["date_end"] === undefined ? item.start : item.extendedProps["date_end"]
				})
			}
		})


		this.saveReservation()

  	}
}
