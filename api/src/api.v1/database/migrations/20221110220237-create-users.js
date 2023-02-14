'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('users',
			{
				id: {
					type: Sequelize.DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: Sequelize.DataTypes.STRING(30),
					allowNull: false
				},
				last_name: {
					type: Sequelize.DataTypes.STRING(30),
					allowNull: false
				},
				email: {
					type: Sequelize.DataTypes.STRING(30),
					unique: true,
					allowNull: false
				},
				password: {
					type: Sequelize.DataTypes.STRING(30),
					allowNull: false
				},
				id_role: {
					type: Sequelize.DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'role',
						key: 'id'
					},
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}
			}
		)
	},

	async down (queryInterface) {
		await queryInterface.dropTable('users')
	}
};
