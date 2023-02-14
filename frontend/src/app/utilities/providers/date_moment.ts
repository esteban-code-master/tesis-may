import { MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'

export const setting_format_date = {
	parse: {
		dateInput: 'LL',
	},
	display: {
		dateInput: 'dddd D [de] MMMM',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'dddd D [de] MMMM',
		monthYearA11yLabel: 'MMMM YYYY',
	}
}

export const provider_date = [
	{
		provide: DateAdapter,
		useClass: MomentDateAdapter,
		deps: [
			MAT_DATE_LOCALE,
			MAT_MOMENT_DATE_ADAPTER_OPTIONS
		]
	},
	{
		provide: MAT_DATE_FORMATS,
		useValue: setting_format_date
	},
	{ 	provide: MAT_DATE_LOCALE,
		useValue: 'es-MX'
	}
]
