'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('answer',
			{
				id: {
					type: Sequelize.DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
					allowNull: false
				},
				id_user: {
					type: Sequelize.DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'users',
						key: 'id'
					},
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				},
				id_question: {
					type: Sequelize.DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'question',
						key: 'id'
					},
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				},
				answer: {
					type: Sequelize.DataTypes.STRING(1000),
					allowNull: false
				}
			}
		)
	},

	async down (queryInterface) {
		await queryInterface.dropTable('users')
	}
};


