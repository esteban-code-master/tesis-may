import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maps-zoom',
  templateUrl: './maps-zoom.component.html',
  styleUrls: ['./maps-zoom.component.scss']
})

export class MapsZoomComponent {

  @Output() changeZoom: EventEmitter<number>

  private zoom: number
  private speed: number

  constructor(){
    this.changeZoom = new EventEmitter<number>()
    this.zoom =  1
    this.speed = 3
  }

  private controlZoom = ( type: string ) => {

    if((this.zoom > 1 && type !== "@type/increment") || (this.zoom < 5 && type === "@type/increment")){
      type === "@type/increment" ? this.zoom++ : this.zoom--
    }

    return (this.zoom * (this.speed * 10) ) / 100
  }


  public zoomPlus = () => {
    const increment = this.controlZoom("@type/increment")
    this.changeZoom.emit(increment)
  }

  public zoomMinus = () => {
    const decrement = this.controlZoom("@type/decrement")
    this.changeZoom.emit(decrement)
  }
}
