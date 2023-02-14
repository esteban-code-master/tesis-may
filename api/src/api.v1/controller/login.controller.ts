import { Response,Request, NextFunction } from "express"
import { get_decode_token } from "../utilities/token/token"
import UserServices from "../services/user.service"

export class Authentication {

	private readonly __user_sercices: UserServices

	constructor(){
		this.__user_sercices = new UserServices()
	}

	public login = async (req: Request, res: Response, next: NextFunction) => {
		try
		{
			const { username = "", password = "" } = req.body
			const user = await this.__user_sercices.authentication( username, password )

			if(user){
				res.status(200).json({
					status: res.statusCode,
					data: user
				})

				return
			}

			res.status(404).json({
				status: res.statusCode,
				data: {
					username: username,
					message: "not found"
				}
			})

		}
		catch(error: any)
		{
			console.log(error)
			next()
		}
	}


	public token_verify = async (req: Request, res: Response, next: NextFunction) => {
		try
		{
			res.status(200).json({
				status: res.statusCode,
				data: {
					user: get_decode_token(req.headers.authorization?.split(' ')[1] || "")
				}
			})
		}
		catch(error: any){
			console.log(error)
			next()
		}
	}


	public get_question = async (req: Request, res: Response, next: NextFunction) => {
		try
		{
			res.status(200).json({
				status: res.statusCode,
				data: await this.__user_sercices.get_question()
			})
		}
		catch(error: any){
			console.log(error)
			next()
		}
	}


	public  create_answer = async (req: Request, res: Response, next: NextFunction) => {

		try
		{
			res.status(200).json({
				status: res.statusCode,
				data: await this.__user_sercices.create_answer(req.body)
			})
		}
		catch(error: any){
			console.log(error)
			next()
		}
	}

	public get_answer= async (req: Request, res: Response, next: NextFunction) => {
		try
		{
			res.status(200).json({
				status: res.statusCode,
				data: await this.__user_sercices.get_answer()
			})
		}
		catch(error: any){
			console.log(error)
			next()
		}
	}

	public delete_answer= async (req: Request, res: Response, next: NextFunction) => {
		try
		{
			const id = req.params.id

			res.status(200).json({
				status: res.statusCode,
				data: await this.__user_sercices.delete_answer(Number(id))
			})
		}
		catch(error: any){
			console.log(error)
			next()
		}
	}
}
