import jwt from "jsonwebtoken"
import moment from "moment"
import ENVIRONMENT from "../../config/environments"
import { IUser } from "../../interface/user"

export const create_token = (user: IUser ) => {

	const payload = {
		id_user: user.id,
		role: user.id_role,
		iat: moment().unix(),
        exp: moment().add(1, "days").unix()
	}

	return jwt.sign(payload, ENVIRONMENT.secret_token)
}


export const get_decode_token = (token: string) => {
	return jwt.decode(token)
}

