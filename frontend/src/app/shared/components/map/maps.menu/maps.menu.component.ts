import { Component, Output, EventEmitter, AfterViewInit, ViewChild, Input } from '@angular/core'
import { IMapsConfiguration } from 'src/app/interfaces/maps_configuration.interface'
import moment, { Moment } from 'moment'
import MapsFilters from 'src/app/interfaces/maps/maps-filters.interface'
import { IBusinessUnit } from 'src/app/interfaces/business_unit/business-unit.interface'
import { DateRange, DefaultMatCalendarRangeStrategy,MAT_DATE_RANGE_SELECTION_STRATEGY, MatCalendar } from '@angular/material/datepicker';

@Component({
	selector: 'app-maps-menu',
	templateUrl: './maps.menu.component.html',
	styleUrls: ['./maps.menu.component.scss'],
	providers: [{
		provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
		useClass: DefaultMatCalendarRangeStrategy
	}]
})

export class MapsMenuComponent implements AfterViewInit {

	@Output() changePropsMaps : EventEmitter<IMapsConfiguration>
	@Output() changeMap: EventEmitter<any>
	@Output() initPropsMaps : EventEmitter<IMapsConfiguration>
	@Output() selectedRangeValueChange: EventEmitter<DateRange<Moment>>
	@ViewChild(MatCalendar) calendar !: MatCalendar<Moment>
	@Input() selectedRangeValue !: DateRange<Moment>

	protected isOpenCalendar: boolean
	protected isOpenRangerDate: boolean
	protected maps_configuration : IMapsConfiguration
	protected maps_filters! : MapsFilters

	constructor(){
		this.isOpenCalendar = false
		this.maps_configuration = {
			date: {
				first_date: moment().locale("es"),
				second_date: moment().locale("es"),
			},
			views: {
				isOpenLocation: false,
				isOpenPisos: false,
				isOpenRangerDate: false
			},
			location: []
		}
		this.isOpenRangerDate = false
    	this.changePropsMaps = new EventEmitter<IMapsConfiguration>()
		this.changeMap = new EventEmitter<any>
		this.initPropsMaps = new EventEmitter<IMapsConfiguration>()
		this.selectedRangeValueChange = new EventEmitter<DateRange<Moment>>()
  	}

	public ngAfterViewInit() {
		this.initPropsMaps.emit( this.maps_configuration )
	}

	protected changeLocation = ( id_business_unit: number ) => {
		const match_business_unit = this.maps_configuration.location.find(( business_unit: IBusinessUnit ) => {
			return business_unit.id === id_business_unit
		})

		console.log(match_business_unit)
		this.maps_configuration.select = match_business_unit
		this.maps_configuration.views.isOpenLocation = false
	}

	protected changePisos = ( name_map: string ) => {
		this.maps_configuration.views.isOpenPisos = false
		this.changeMap.emit({ maps_configuration: this.maps_configuration, name_map: name_map })
	}

	protected NextDate = () => {
		const date = moment(this.maps_configuration.date.first_date).add(1,"days")
		this.maps_configuration.date.first_date = date
		this.maps_configuration.date.second_date = date
		this.isOpenRangerDate = false

		this.changePropsMaps.emit( this.maps_configuration )
  	}

  	protected PreviousDate = () => {
		const date = moment(this.maps_configuration.date.first_date).subtract(1,"days")
		this.maps_configuration.date.first_date = date
		this.maps_configuration.date.second_date = date
		this.isOpenRangerDate = false

		this.changePropsMaps.emit(  this.maps_configuration )
  	}

	protected selectedChange( date: Moment) {
        if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
            this.selectedRangeValue = new DateRange<Moment>(date, null)
			this.selectedRangeValueChange.emit(this.selectedRangeValue)
			return
        }
		const start = this.selectedRangeValue.start
		const end = date
		if (end >= start) {
			this.selectedRangeValue = new DateRange<Moment>(start, end)
		}
		this.selectedRangeValueChange.emit(this.selectedRangeValue)
    }

	protected saveDate(){
		if(this.selectedRangeValue){
			let { start,end } = this.selectedRangeValue
			this.maps_configuration.date.first_date = moment(start).locale("es")
			this.maps_configuration.date.second_date = moment(end).locale("es")
			const diference_days = this.maps_configuration.date.first_date.diff(this.maps_configuration.date.second_date)
			const is_equals_date = diference_days === 0 || diference_days > 1
			if(diference_days > 1){
				this.maps_configuration.date.second_date = this.maps_configuration.date.first_date
			}
			this.isOpenRangerDate = !is_equals_date
			this.isOpenCalendar = false
			this.changePropsMaps.emit( this.maps_configuration )
		}
	}

	protected closeCalendar(){
		this.isOpenCalendar = false
	}
}
