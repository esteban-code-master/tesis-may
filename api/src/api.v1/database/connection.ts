import { Sequelize } from 'sequelize';
import ENVIRONMENT from '../config/environments'

export default class Database {

    private sequelize: Sequelize

    constructor() {
        this.sequelize = new Sequelize(
            ENVIRONMENT.dbName,
            ENVIRONMENT.dbUser,
            ENVIRONMENT.dbPassword,
            {
                host: ENVIRONMENT.dbHost,
                port: ENVIRONMENT.dbPort,
                dialect: ENVIRONMENT.dbDialect,
                dialectOptions: {
                    options: {
                        requestTimeout: 300000,
                        encrypt: false
                    }
                },
                pool:{
                    idle: 80000,
                    min: 20,
                    max: 60,
                    acquire: 80000
                }
            }
        );
    }


    connection2(){
        return this.sequelize
    }

    async connection(): Promise<any> {
        try {
          await this.sequelize.authenticate();
          console.log('Connection has been established successfully.');
          return this.sequelize;
        } catch (error) {
            console.log("erorro al contect",error);
        }
    }
}
