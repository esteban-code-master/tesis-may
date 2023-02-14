const color_working_day: Record<string,string> = {
	JRNDFULL : "#ea1a1a",
	JRNDVPT : "#b87201",
	JRNDMTN : "#2a95a0"
}

export const get_color_working_day = (propety: string) => {
	if(color_working_day.hasOwnProperty(propety)){
		return color_working_day[propety]
	}

	return ""
}





