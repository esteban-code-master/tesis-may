import UserRepository from "../repository/user.repository"
import { create_token } from "../utilities/token/token"

export default class UserServices {

	private readonly userRepository: UserRepository

	constructor(){
		this.userRepository =  new UserRepository()
	}

	public async authentication( username: string, password: string ){

		const user = await this.userRepository.findOne(username,password)

		if(user){
			return {
				user,
				token: create_token(user)
			}
		}

		return null
	}

	public async get_question(){
		return await this.userRepository.get_question()
	}

	public async create_answer(data: Array<any>){
		return await this.userRepository.create_answer(data)
	}

	public async get_answer(){
		return await this.userRepository.get_answer()
	}

	async delete_answer(id: number){
		return await this.userRepository.delete_answer(id)
	}
}
