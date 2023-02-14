import model from "../models"

export default class UserRepository {

    constructor(){}

	async findOne( username: string, password: string ){
		return await model.users.findOne({
			where: {
				email: username,
				password: password
			}
		})
	}

	async get_question(){
		return await model.question.findAll()
	}

	async create_answer(data: Array<any>){
		return await model.answer.bulkCreate(data)
	}

	async get_answer(){
		const [ data ] = await model.sequelize.query(`SELECT name,id_user,id_question,answer,question, answer.id as 'id_answer' FROM tesis.users users
		INNER JOIN tesis.answer answer ON users.id = answer.id_user
		INNER JOIN tesis.question question ON  answer.id_question = question.id
		ORDER BY users.id, answer.id_question`)

		return data
	}

	async delete_answer(id: number){
		return await model.answer.destroy({
			where: {
				id: id
			}
		})
	}
}
