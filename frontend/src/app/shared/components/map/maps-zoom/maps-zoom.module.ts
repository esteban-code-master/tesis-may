import { NgModule } from '@angular/core'
import { MapsZoomComponent } from './maps-zoom.component'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [MapsZoomComponent],
  imports: [MatIconModule],
  exports: [MapsZoomComponent]
})

export class MapsZoomModule { }
