import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MapsInfoPositionComponent } from './maps-info-position.component'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'


import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [MapsInfoPositionComponent],
  imports: [CommonModule,MatIconModule,MatChipsModule,MatListModule,RouterModule,MatButtonModule],
  exports: [CommonModule,MatIconModule,MatChipsModule,MatListModule,RouterModule,MatButtonModule,MapsInfoPositionComponent]
})
export class MapsInfoPositionModule { }
