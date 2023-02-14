import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-select-working-day',
  templateUrl: './select-working-day.component.html',
  styleUrls: ['./select-working-day.component.scss']
})

export class SelectWorkingDayComponent {
	@Input()
	public name: string = "seleccione su fecha"
	public  typeWorkingDayId !: string
}
