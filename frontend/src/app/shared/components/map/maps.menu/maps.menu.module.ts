import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsMenuComponent } from './maps.menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'
import { MomentPipe } from 'src/app/pipes/moment.pipes';
import { MatTooltipModule } from '@angular/material/tooltip';


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
		ReactiveFormsModule,
		MatTooltipModule
	]

@NgModule({
  declarations: [MapsMenuComponent, MomentPipe],
  imports: [
    ModuleGeneral
  ],
  exports: [MapsMenuComponent,FormsModule]
})
export class MapsMenuModule { }
