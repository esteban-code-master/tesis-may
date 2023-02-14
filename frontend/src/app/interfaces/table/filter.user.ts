import { EventEmitter } from '@angular/core'

export interface IFilterUser {
	filter: EventEmitter<any>,
	status?: number,
	working_day?: number,
	date_start?: string,
	date_end?: string
}
