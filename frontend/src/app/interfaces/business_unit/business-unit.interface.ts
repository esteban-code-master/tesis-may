export  interface IBusinessUnit {
	id?: number,
	name?: number,
	pisos?: Array<IPisos>
}

export interface IPisos {
	id: number,
	name: string,
	area: IArea,
	name_map?: string
}

export interface IArea {
	id: number,
	area: string
}
