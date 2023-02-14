import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core'
import { IMapsConfiguration } from 'src/app/interfaces/maps_configuration.interface'
import { IMapsAvailability, IMapsAvailabilityOptions, IMapsAvailabilityReservation, IMapsResponse } from 'src/app/interfaces/maps/maps.response'
import { IDictionaryTypeWorkingDay } from 'src/app/interfaces/dictionary/type_working_day'
import { MapsInfoPositionComponent } from '../maps-info-position/maps-info-position.component'
import moment from 'moment'
import { IResponse } from 'src/app/interfaces/response/response'
import { ApiStatus } from 'src/app/enum/api_status.enum'
import { BusinessUnitService } from 'src/app/services/business-unit/business_unit.service'
import DICIONARY_TYPES_WORKING_DAY from 'src/app/shared/dictionary/rules.types_working_day.json'
import {
	is_reservation_fullday,
	is_reservation_multiple,
	is_reservation_afternoon,
	is_reservation_morning
}
from 'src/app/utilities/filter/types_reservation'

@Component({
  selector: 'app-maps-container',
  templateUrl: './maps.container.component.html',
  styleUrls: ['./maps.container.component.scss']
})
export class MapsContainerComponent {

	@ViewChild("mapLoader")
	public mapLoader !: ElementRef
	@ViewChild( MapsInfoPositionComponent )
	public openModalInfoPosition !: MapsInfoPositionComponent
	@Output()
	public selectMap: EventEmitter<string>

  	private __map !: HTMLElement
	private dictionary_working_day:  Record< string, IDictionaryTypeWorkingDay >
	private navegationPosition : any
	private defaultMap: number = 0
	public firstMapLoad: boolean
	public spinner: boolean

  	constructor(private renderer: Renderer2, private __business_unit: BusinessUnitService){
		this.firstMapLoad = true
		this.spinner = true
		this.dictionary_working_day = DICIONARY_TYPES_WORKING_DAY
		this.navegationPosition = {
			click: {
				x: 0,
				y: 0
			},
			scroll: {
				x: 0,
				y: 0
			},
			evets: {
				isClick: false
			}
		}

		this.selectMap =  new EventEmitter<string>()
	}

	public changeZoom( zoom_level: number ){
		this.renderer.setStyle(this.__map, "transform",`scale(${zoom_level})`)
  	}

	public updateMaps( maps_configuration: IMapsConfiguration ){

		this.spinner = true
		this.map_position_ruler(maps_configuration)
	}

	public change_map(props: any){

		this.__business_unit.get_map_render(props.name_map)
		.subscribe(( map: IResponse<string> )=>{

			if(map.status === ApiStatus.successful){
				this.selectMap.emit(props.name_map)
				this.renderer.setProperty(this.mapLoader.nativeElement,'innerHTML', map.data)
			}

			this.selectMap.emit(props.name_map)
			this.renderer.setProperty(this.mapLoader.nativeElement,'innerHTML', map.data)
			this.__map = this.mapLoader.nativeElement.firstElementChild

			this.registerEventsForMap()
			this.map_position_ruler(
				props.maps_configuration,
				(cell: HTMLElement) => {
					this.renderer.listen(cell,"dblclick", this.openModal)
				}
			)
		})
	}

	private map_position_ruler( maps_configuration: IMapsConfiguration , callback: Function = () => {} ){

		this.__business_unit.get_position_availability( maps_configuration.date.first_date, maps_configuration.date.second_date)
		.subscribe(( response_availability: IMapsResponse<IMapsAvailability> ) => {
			this.__map.querySelectorAll("td").forEach(( positionHTML: HTMLElement) => {
				const { type }  = positionHTML.dataset

				if(type === "@type/position"){
					this.renderer.addClass(positionHTML,"map-position")
					this.renderer.addClass(positionHTML,"map-position--close")
					callback(positionHTML)

					return
				}

				this.renderer.addClass(positionHTML,"map-position-fixed")
			})

			response_availability.data.availability?.forEach(( availability: IMapsAvailabilityOptions) => {

				const positionHTML = this.__map.querySelector(`[data-position-key='${availability.key}']`)
				this.renderer.removeAttribute(positionHTML,'class')
				this.renderer.addClass(positionHTML,"map-position")

				if(availability.reservation.length !== 0){
					this.renderer.removeAttribute(positionHTML,'data-reservation-multiple')

					availability.reservation.forEach((type_reservation: IMapsAvailabilityReservation)=> {

						const only_reservation_current_day = moment(type_reservation.date_start).isSame(moment(maps_configuration.date.first_date).format('YYYY-MM-DD'))
						if(only_reservation_current_day){

							 is_reservation_fullday(type_reservation.working_day.key,() => {
								this.renderer.removeClass(positionHTML,"map-position--close")
								this.renderer.removeClass(positionHTML,"map-position--availability")
								this.renderer.addClass(positionHTML,"map-position--not-available")

							})
							is_reservation_multiple(
								positionHTML as HTMLElement,
								this.renderer,
								type_reservation.working_day.key,() => {
								this.renderer.removeClass(positionHTML,"map-position--close")
								this.renderer.removeClass(positionHTML,"map-position--availability")
								this.renderer.addClass(positionHTML,"map-position--not-available")
							})

							is_reservation_morning(positionHTML as HTMLElement, type_reservation.working_day.key,()=>{
								this.renderer.removeClass(positionHTML,"map-position--close")
								this.renderer.removeClass(positionHTML,"map-position--availability")
								this.renderer.addClass(positionHTML,"map-position--morning")
							})

							is_reservation_afternoon(positionHTML as HTMLElement, type_reservation.working_day.key,()=>{
								this.renderer.removeClass(positionHTML,"map-position--close")
								this.renderer.removeClass(positionHTML,"map-position--availability")
								this.renderer.addClass(positionHTML,"map-position--afternoon")
							})
						}
					})

					return
				}

				this.renderer.removeClass(positionHTML,"map-position--close")
				this.renderer.addClass(positionHTML,"map-position--availability")
				this.renderer.setAttribute(positionHTML,'data-active', '@event/click')
			})

			this.spinner = false
			this.firstMapLoad = false
    	})
	}


	public initializeMaps( maps_configuration: IMapsConfiguration ){
		this.__business_unit.get_maps_assigned_user()
		.subscribe(( response_maps: IResponse<any> ) => {
			if(response_maps.status === ApiStatus.successful){
				console.log(response_maps.data)
				maps_configuration.location = response_maps.data
				maps_configuration.select = response_maps.data[0]

				console.log(response_maps.data[0]?.pisos)
				const get_first_map:string = response_maps.data[0]?.pisos[0]?.name_map
				maps_configuration.select_areas = response_maps.data[0]?.pisos[0]?.area
				this.__business_unit.get_map_render(get_first_map)
				.subscribe(( map: IResponse<string> )=>{

					if(map.status === ApiStatus.successful){
						this.selectMap.emit(get_first_map)
						this.renderer.setProperty(this.mapLoader.nativeElement,'innerHTML', map.data)
					}

					this.selectMap.emit(get_first_map)
					this.renderer.setProperty(this.mapLoader.nativeElement,'innerHTML', map.data)
					this.__map = this.mapLoader.nativeElement.firstElementChild

					this.registerEventsForMap()
					this.map_position_ruler(
						maps_configuration,
						(cell: HTMLElement) => {
							this.renderer.listen(cell,"dblclick", this.openModal)
						}
					)
				})
			}
		})

	}

	private registerEventsForMap = () =>  {
		this.renderer.listen(this.__map,"mousedown",this.activeNavegationMap)
		this.renderer.listen(this.__map,"mousemove",this.navegationWhenMouseMove)
		this.renderer.listen(this.__map,"mouseup",this.navegationMouseup)
	}

	private activeNavegationMap = ( event: MouseEvent) => {

		const { clientX: x, clientY: y } = event
		const { scrollLeft,scrollTop } = this.mapLoader.nativeElement

		this.navegationPosition.click.x = x,
		this.navegationPosition.click.y = y
		this.navegationPosition.scroll.x =  scrollLeft
		this.navegationPosition.scroll.y = scrollTop
		this.navegationPosition.evets.isClick = true
	}

	private navegationMouseup = ( event: MouseEvent) =>{
		this.navegationPosition.evets.isClick = false
		this.renderer.removeClass(this.__map, "cursor-is-move")
	}

	private navegationWhenMouseMove = (event: MouseEvent) =>{
		const { clientX: x, clientY: y } = event;

		if(this.navegationPosition.evets.isClick){
			this.renderer.addClass(this.__map, "cursor-is-move")

			const top =   this.navegationPosition.scroll.y - ( y - this.navegationPosition.click.y)
			const left =  this.navegationPosition.scroll.x - ( x - this.navegationPosition.click.x)

			this.mapLoader.nativeElement.scrollTop = top
			this.mapLoader.nativeElement.scrollLeft = left
		}
	}

	private openModal = (event: any) => {
		console.log(event.target.dataset.active)
		if(event.target.dataset.active === "@event/click"){
			this.openModalInfoPosition.togglePositionInfo()
			this.openModalInfoPosition.position = event.target.dataset.positionKey
			this.openModalInfoPosition.position_name = event.target.innerHTML
		}
	}
}
