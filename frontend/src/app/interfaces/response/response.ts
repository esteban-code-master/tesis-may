export interface IResponse<T> {
	status: number,
	data: T
}

export interface IUpdateHttp {
	is_apply: boolean
}
