import { MatTableDataSource } from "@angular/material/table"

export interface ITableSettings<type_data_source> {
	columnsKey: Array<string>,
	dataSource: MatTableDataSource<any>,
	cloneDataSource?: Array<type_data_source>,
}
