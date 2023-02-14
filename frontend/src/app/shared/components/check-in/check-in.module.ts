import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CheckInComponent } from './check-in.component'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
	declarations: [
		CheckInComponent
	],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [ CheckInComponent ]
})
export class CheckInModule { }
