import { Directive, HostListener, Renderer2, ElementRef, ViewChild, Input,Host } from '@angular/core';

@Directive({
  selector: '[mapsController]'
})

export class MapsDirective {

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  private navegationPosition  = {
    current: {
      x: 0,
      y: 0
    },
    from: {
      x: 0,
      y: 0
    },
    evets: {
      isClick: false
    }
  }


  @HostListener("mousedown",['$event']) activeNavegationMap( event: MouseEvent){
    const { clientX: x, clientY: y } = event

    this.navegationPosition.current.x = x
    this.navegationPosition.current.y = y
    this.navegationPosition.evets.isClick = true

    this.rederer.addClass(this.element.nativeElement, "cursor-is-move")
  }

  @HostListener("click",['$event']) cliclk( event: MouseEvent){
      alert("breiugbiroeubguirbiu")
  }

  @HostListener("mouseup",['$event']) navegationMouseup( event: MouseEvent){
      this.navegationPosition.evets.isClick = false
      this.rederer.removeClass(this.element.nativeElement, "cursor-is-move")
  }

  @HostListener("mousemove",['$event']) navegationWhenMouseMove (event: MouseEvent) {
      const { clientX: x, clientY: y } = event;

      this.navegationPosition.from.x = x
      this.navegationPosition.from.y = y

    if(this.navegationPosition.evets.isClick){

        // const top = (this.navegationPosition.current.y - this.navegationPosition.from.y)  + this.expand.mapContainer.nativeElement.scrollTop
        // const left = (this.navegationPosition.current.x - this.navegationPosition.from.x) + this.expand.mapContainer.nativeElement.scrollLeft

        setTimeout(() => {
            // const time = this.expand.mapContainer.nativeElement.scroll({
            //     top: top,
            //     left: left,
            // })

            // clearTimeout(time)
          }, 400)
    }
  }



}
