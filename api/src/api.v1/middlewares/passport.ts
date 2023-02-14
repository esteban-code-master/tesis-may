import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"
import passport from "passport"
import environment from '../config/environments'

const setting: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: environment.secret_token
}

export default new Strategy( setting, async ( payload, done ) => {
	try
	{
		//const user = await User.findById(payload.id);
		if (payload) {
			return done(null, payload)
		}

		return done(null, false)
	}
	catch (error)
	{
		console.log(error)
	}
})


export const auth = passport.authenticate('jwt', { session: false })
