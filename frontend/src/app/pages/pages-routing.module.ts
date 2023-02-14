import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ReservationComponent } from './reservation/reservation.component'
import { MapsComponent } from './maps/maps.component'
import { LoginComponent } from './login/login.component'
import { TemplateComponent } from '../shared/layout/template/template.component'
import { AuthGuard } from '../guards/auth.guard.guard'
import { ROLES } from '../enum/roles.enum'

const routes: Routes = [
	{
		path: '',
		component: TemplateComponent,
		children: [
			{
				path: '',// ADMIN
				component: ReservationComponent,
				canActivate: [AuthGuard],
				data: {
					roles: [1]
				}
			},
			{
				path: 'question',//NORMAL
				component: MapsComponent,
				canActivate: [AuthGuard],
				data: {
					roles: [2]
				}
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent
	}
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot( routes )
	],
	exports: [
		RouterModule
	]
})
export class PagesRoutingModule { }
