import { Request, Response } from 'express'
import {
	getUsersModel,
	getUserModel,
	getUserByEmailModel,
	createUserModel,
	updateUserModel,
	deleteUserModel
} from '../models/user'

const getUsers = async (req: Request, res: Response) => {
    const page = Number(req.query.page as string) || 1
    const limit = Number(req.query.limit as string) || 7

    const { users, total } = await getUsersModel(page, limit)

    res.json({
        users,
        total,
        page,
        totalPages: Math.ceil(total / limit)
    })
}

const getUser = async (req: Request, res: Response) => {
	const { id } = req.params
	const user = await getUserModel(Number(id))

	res.json(user)
}

const createUser = async (req: Request, res: Response) => {
	try {
		const { body } = req
		const existingUser = await getUserByEmailModel(body.correo)

		if (existingUser.length > 0) {
			res.status(400).json({ message: 'This email already exists' })
			return
		}

		await createUserModel(body)
		res.status(201).json({ message: 'User created', body })
	} catch (error) {
		console.error('Error creating user:', error)
		res.status(500).json({ message: 'Internal server error' })
	}
}

const updateUser = async (req: Request, res: Response) => {
	const { body } = req
	const { id } = req.params

	await updateUserModel(Number(id), body)
	res.json({ message: 'User updated', body })
}

const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params

	await deleteUserModel(Number(id))
	res.json({ message: `User with id ${id} deleted` })
}

export { getUsers, getUser, createUser, updateUser, deleteUser }
