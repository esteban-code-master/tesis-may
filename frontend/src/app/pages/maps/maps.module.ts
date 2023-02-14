import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapsComponent } from './maps.component'
import { MapsContainerModule } from '../../shared/components/map/maps.container/maps.container.module'


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsContainerModule,
  ],
  exports: [
    CommonModule,
    MapsContainerModule
  ]
})

export class MapsModule { }
