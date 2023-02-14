import { Sequelize, DataTypes, Model } from 'sequelize'

export default (sequelize: Sequelize) => {

	class question extends Model {}

	question.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			question: {
				type: DataTypes.STRING(1000),
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: "question",
			freezeTableName: true,
			updatedAt: false,
			createdAt: false,
		}
	)

	return question
}
