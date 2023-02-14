

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { AdmindialogComponent } from './admin-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AdmindialogComponent
  ],
  imports: [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatGridListModule,
  MatDatepickerModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule
  
],
exports: [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatGridListModule,
  MatDatepickerModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule
]
})
export class AdmindialogModel { }