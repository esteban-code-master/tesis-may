import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AutocompleteUserComponent } from './autocomplete-user.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
	declarations: [
		AutocompleteUserComponent
	],
	imports: [
		CommonModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule
	],
	exports: [
		AutocompleteUserComponent
	]
})
export class AutocompleteUserModule { }
