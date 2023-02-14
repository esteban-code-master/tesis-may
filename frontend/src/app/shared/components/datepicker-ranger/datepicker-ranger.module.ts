import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DatepickerRangerComponent } from './datepicker-ranger.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
	declarations: [
		DatepickerRangerComponent
	],
	imports: [
		CommonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		MatButtonModule
	],
	exports: [DatepickerRangerComponent]
})
export class DatepickerRangerModule { }
