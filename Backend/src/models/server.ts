import express from 'express'
import cors from 'cors'
import usersRouter from '../routes/users'

class Server {
	private port: string
	private app = express()

	constructor(port: string) {
		this.port = port
		this.middleware()
		this.routes()
		this.listen()
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`)
		})
	}

	routes() {
		this.app.use('/', usersRouter)
	}

	middleware() {
		this.app.use(
			cors({
				origin: '*'
			})
		)
		this.app.use(express.json())
	}
}

export default Server
