import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core'
import moment, { Moment } from 'moment'
import {default as _rollupMoment} from 'moment'
import { IDateRanger } from 'src/app/interfaces/date/ranger_date'
import { provider_date } from 'src/app/utilities/providers/date_moment'


@Component({
	selector: 'app-datepicker-ranger',
	templateUrl: './datepicker-ranger.component.html',
	styleUrls: ['./datepicker-ranger.component.scss'],
	providers: provider_date
})

export class DatepickerRangerComponent implements OnInit {

	@Input() class: string = ""
	@Input() label: string = "title label"
	@Input() disabled: boolean = true
	@Input() filter: boolean = true
	@Input() dateFilter !: (date: Moment) => boolean
	@Input() dateClass !: ( cellDate: any, view: string ) => string
	@Output() selectDate: EventEmitter<IDateRanger>

	public today: any
	public date_start !: moment.Moment
	public date_end !: moment.Moment
	public calendar_mode: string
	private mode_ranger: string = "@mode/ranger"
	private mode_basic: string = "@mode/basic"

	constructor(){
		this.selectDate = new EventEmitter<IDateRanger>
		this.calendar_mode = this.mode_ranger
	}

	ngOnInit() {
		this.today = this.filter ? moment() : null
	}

	public saveDate(){

		this.selectDate.emit({
			date_end: this.date_end?.format("YYYY-MM-DD"),
			date_start: this.date_start?.format("YYYY-MM-DD")
		})

		if(!this.date_end){
				this.calendar_mode = this.mode_basic
			return
		}
	}
}
