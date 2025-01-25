import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const dbpool = mysql
	.createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME
	})
	.promise()

dbpool
	.getConnection()
	.then(connection => {
		connection.release()
	})
	.catch(err => {
		console.error('Database connection failed:', err.message)
		process.exit(1)
	})

export default dbpool
