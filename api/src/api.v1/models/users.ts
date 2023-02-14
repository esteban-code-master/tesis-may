import { Sequelize, DataTypes, Model } from 'sequelize'

export default (sequelize: Sequelize) => {

	class users extends Model {
		static associate(models: any){
			users.belongsToMany(models.question, {
				through: models.answer,
				foreignKey: {
					name: "id_user"
				},
				otherKey: "id_question",
				as: "respuestas"
			})
		}
	}

	users.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING(30),
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING(30),
				allowNull: false
			},
			email: {
				type: DataTypes.STRING(30),
				unique: true,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING(30),
				allowNull: false
			},
			id_role: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'role',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}
		},
		{
			sequelize,
			freezeTableName: true,
			tableName: "users",
			updatedAt: false,
			createdAt: false,
		}
	)



	return users
}
