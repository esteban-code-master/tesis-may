import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatSnackBarModule,
		MatProgressSpinnerModule
	]
})

export class LoginModule { }
