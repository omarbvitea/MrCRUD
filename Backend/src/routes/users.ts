import { Router } from 'express'
import { validate } from '../middleware/validation'
import { createUserSchema, updateUserSchema } from '../schemas/users'
import {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
} from '../controllers/users'

const usersRouter = Router()

usersRouter.get('/usuarios', getUsers)
usersRouter.post('/usuarios', validate(createUserSchema), createUser)
usersRouter.get('/usuarios/:id', getUser)
usersRouter.put('/usuarios/:id', validate(updateUserSchema), updateUser)
usersRouter.delete('/usuarios/:id', deleteUser)

export default usersRouter
