import dotenv from 'dotenv'
dotenv.config()

const ENVIRONMENT : Record<string, any> = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 7001,
    secret_token: process.env.SECRET_TOKEN,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbDialect: process.env.DB_DIALECT,
	active_directory_host: process.env.URL_ACTIVEDIRECTORY
}

export default ENVIRONMENT
