import { Sequelize, Model, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {

	class answer extends Model {
	}

	answer.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			id_user: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			id_question: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'question',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			answer: {
				type: DataTypes.STRING(1000),
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: 'answer',
			freezeTableName: true,
			updatedAt: false,
			createdAt: false
		}
	)

  	return answer
}
