'use strict'

import { readdirSync } from "fs"
import path from "path"
import { DataTypes, Sequelize } from "sequelize"
import Database from "../database/connection"


const basename = path.basename(__filename)
const dbConnection:Sequelize = new Database().connection2()
const db:Sequelize | any = {}

// import area_assigned from './area_assigned'
// area_assigned(dbConnection).

const get = (files: any, intancedb: any) => {

	return new Promise( async (resolve,reject) => {
		for await (let file of files){
			import(`./${file}`).then(( model )=>{
				const intance = model.default(dbConnection)
				intancedb[intance.name] = intance
			})
		}

		resolve(true)
	})
}

//const DatabaseAssociation = () => {

	const files = readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts')
	})

	get(files,db).then(( succesfull) => {
		Object.keys(db).forEach(modelName => {
			if (db[modelName].associate) {
				db[modelName].associate(db)
			}
		})

		db.sequelize = dbConnection
		db.Sequelize = Sequelize
	})

	// for (let file of files) {
	// 	// const model = await import(`./${file}`)
	// 	// const namedModel = model.default(dbConnection)
	// 	// db[namedModel.name] = namedModel

	// 	import(`./${file}`).then(( model )=>{
	// 		const intance = model.default(dbConnection)
	// 		db[intance.name] = intance
	// 	})
	// }


	// Object.keys(db).forEach(modelName => {
	// 	if (db[modelName].associate) {
	// 		db[modelName].associate(db)
	// 	}
	// })

	// db.sequelize = dbConnection
	// db.Sequelize = Sequelize

	//return db
//}




export default db
