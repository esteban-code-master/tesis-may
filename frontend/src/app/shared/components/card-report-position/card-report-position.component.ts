import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-report-position',
  templateUrl: './card-report-position.component.html',
  styleUrls: ['./card-report-position.component.scss']
})
export class CardReportPositionComponent {

	@Input() title: string = "title card"
	@Input() icon: string = ""
	@Input() count: number = 0
	@Input() progress: number = 0
	@Input() themeSpinner: string = ""
	@Input() type: String = ""

	constructor(){}
}
