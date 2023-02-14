import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectWorkingDayComponent } from './select-working-day.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { DatepickerRangerModule } from '../datepicker-ranger/datepicker-ranger.module'

@NgModule({
	declarations: [
		SelectWorkingDayComponent
	],
	imports: [
		CommonModule,
		MatInputModule,
		MatDatepickerModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		DatepickerRangerModule
	],
	exports: [
		SelectWorkingDayComponent
	]
})
export class SelectWorkingDayModule { }
