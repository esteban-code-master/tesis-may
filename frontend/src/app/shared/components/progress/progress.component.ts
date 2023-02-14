import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

	@Input() progress: number = 100
	@Input() themeSpinner: string = "default"

}
