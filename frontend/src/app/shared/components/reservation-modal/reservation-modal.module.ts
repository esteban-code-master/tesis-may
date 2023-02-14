import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReservationModalComponent } from './reservation-modal.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatDialogModule} from '@angular/material/dialog'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'

import {MatStepperModule} from '@angular/material/stepper'
import {MatCheckboxModule} from '@angular/material/checkbox'

import { SelectWorkingDayModule } from '../select-working-day/select-working-day.module'
import { DatepickerRangerModule } from '../datepicker-ranger/datepicker-ranger.module'
const ModuleDeclare = [
	CommonModule,
	MatFormFieldModule,
	MatInputModule,
	MatDialogModule,
	MatGridListModule,
	MatDatepickerModule,
	MatSelectModule,
	FormsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatStepperModule,
	MatCheckboxModule,
	DatepickerRangerModule
]


@NgModule({
	declarations: [ReservationModalComponent],
	imports: [ModuleDeclare],
	exports: [ModuleDeclare]
})
export class ReservationModalModule { }
