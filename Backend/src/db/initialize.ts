import fs from 'fs'
import path from 'path'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const initDB = async () => {
	try {
		const connection = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS
		})

		const initScript = fs.readFileSync(path.resolve('schema.sql'), 'utf8')

		const commands = initScript
			.split(';')
			.map(command => command.trim())
			.filter(command => command.length > 0)

		for (const command of commands) {
			await connection.query(command)
		}

		console.log('Database initialized successfully')
		await connection.end()
	} catch (error) {
		console.error('Error initializing database:', error)
		process.exit(1)
	}
}

initDB()
