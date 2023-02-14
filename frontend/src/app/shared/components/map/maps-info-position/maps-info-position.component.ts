import { Component } from '@angular/core';

@Component({
  selector: 'app-maps-info-position',
  templateUrl: './maps-info-position.component.html',
  styleUrls: ['./maps-info-position.component.scss']
})
export class MapsInfoPositionComponent {

	isOpen: boolean = false
	public isOpenInfoPosition: boolean = false
	public position !: string
	public position_name !: string

	toggle(){
		this.isOpen = !this.isOpen
	}

	public togglePositionInfo(){
		this.isOpenInfoPosition = !this.isOpenInfoPosition
	}

	constructor() { }
}
