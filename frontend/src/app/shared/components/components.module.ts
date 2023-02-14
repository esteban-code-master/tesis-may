import { NgModule } from '@angular/core'
import { MapsContainerModule } from './map/maps.container/maps.container.module'
import { MapsMenuModule } from './map/maps.menu/maps.menu.module'
import { CommonModule } from '@angular/common'
import { ReservationModalModule } from './reservation-modal/reservation-modal.module';
import { AdmindialogModel } from './admin-dialog/admin-dialog.module'

const ModulesGeneral = [
  CommonModule,
  MapsMenuModule,
  MapsContainerModule,
  ReservationModalModule,
  AdmindialogModel
]

@NgModule({
  declarations: [
  ],
  imports: [ModulesGeneral],
  exports: [ModulesGeneral],
})

export class ComponentsModule { }
