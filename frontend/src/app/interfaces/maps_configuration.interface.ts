import { Moment } from "moment"
import { IBusinessUnit }  from "./business_unit/business-unit.interface"


export interface IMapsConfiguration {
    date: date_ranger,
	location: Array<IBusinessUnit>,
	select?: IBusinessUnit,
	select_areas?: Array<any>,
	views: IViewsOptionMaps
}


interface date_ranger {
  first_date: Moment,
  second_date: Moment
}


interface IViewsOptionMaps {
	isOpenLocation: boolean,
	isOpenPisos: boolean,
	isOpenRangerDate: boolean
}
