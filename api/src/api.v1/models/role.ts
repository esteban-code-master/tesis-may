import { Sequelize, Model, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {

	class role extends Model {}

	role.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: false,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING(20),
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: 'role',
			freezeTableName: true,
			updatedAt: false,
			createdAt: false
		}
	)


	return role
}
