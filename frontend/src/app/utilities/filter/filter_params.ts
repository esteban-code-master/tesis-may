
export const filter_params = <T> ( propety: Record<string, T > ) => {

	if(typeof propety === 'object'){

		for(const name in propety){

			if(propety[name] === undefined ){
				delete propety[name]
			}
		}
	}

	return propety
}
