import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessageComponent } from './message.component';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
	declarations: [
		MessageComponent
	],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [MessageComponent]
})
export class MessageModule { }

