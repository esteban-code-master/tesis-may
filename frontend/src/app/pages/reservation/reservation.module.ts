import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationComponent } from './reservation.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { FullCalendarModule } from '@fullcalendar/angular'
import { ReservationModalModule } from '../../shared/components/reservation-modal/reservation-modal.module';

import {MatSidenavModule} from '@angular/material/sidenav';



import {MatDatepickerModule} from '@angular/material/datepicker';


const ModuleGeneral = [
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  FullCalendarModule,
  MatDialogModule,
  ReservationModalModule,
  MatSidenavModule,
  MatDatepickerModule
]

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ModuleGeneral
  ],
  exports: [CommonModule,ModuleGeneral]
})
export class ReservationModule { }
