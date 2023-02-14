import { NgModule } from '@angular/core'

import { PagesRoutingModule } from './pages-routing.module'
import { RouterModule } from '@angular/router'

import { ReservationModule } from './reservation/reservation.module'
import { MapsModule } from './maps/maps.module'
import { LoginModule } from './login/login.module'

import { TemplateModule } from '../shared/layout/template/template.module'

const ModuleGeneral = [
    RouterModule,
    PagesRoutingModule,
    ReservationModule,
    MapsModule,
	LoginModule,
	TemplateModule
]

@NgModule({
  declarations: [],
  exports: [ModuleGeneral],
  imports: [ModuleGeneral]
})

export class PagesModule { }
