import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardReportPositionComponent } from './card-report-position.component'
import { MatCardModule } from '@angular/material/card'
import { ProgressModule } from '../progress/progress.module'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    CardReportPositionComponent
  ],
  imports: [
    CommonModule,
	MatCardModule,
	ProgressModule,
	MatButtonModule,
	RouterModule
  ],
  exports: [CardReportPositionComponent]
})
export class CardReportPositionModule { }
