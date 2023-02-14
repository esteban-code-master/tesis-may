import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapsContainerComponent } from './maps.container.component'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule } from '@angular/material/chips'
import { MatListModule } from '@angular/material/list'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { MapsMenuModule } from 'src/app/shared/components/map/maps.menu/maps.menu.module'
import { MapsZoomModule } from '../maps-zoom/maps-zoom.module'
import { MapsInfoPositionModule } from '../maps-info-position/maps-info-position.module'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


const ModuleGeneral = [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatDatepickerModule,
    RouterModule,
    FormsModule,
    MapsMenuModule,
    MapsZoomModule,
    MapsInfoPositionModule,
	MatProgressSpinnerModule
]

@NgModule({
  declarations: [MapsContainerComponent],
  imports: [ModuleGeneral],
  exports: [ModuleGeneral,MapsContainerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MapsContainerModule { }
