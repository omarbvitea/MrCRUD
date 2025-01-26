import dbpool from '../db/connection'
import { User } from '../interfaces/user'

const getUsersModel = async (page: number, limit: number) => {
    const offset = (page - 1) * limit

    const [users] = await dbpool.query(
        'SELECT * FROM usuarios LIMIT ? OFFSET ?', 
        [limit, offset]
    )

    const [countResult] = await dbpool.query(
        'SELECT COUNT(*) as total FROM usuarios'
    ) 

    const total = (countResult as any[])[0].total

    return { users, total }
}

const getUserModel = async (id: number) => {
	const [users] = await dbpool.query('SELECT * FROM usuarios WHERE id = ?', [
		id
	])
	return users
}

const getUserByEmailModel = async (email: string) => {
	const [user] = await dbpool.query('SELECT * FROM usuarios WHERE correo = ?', [
		email
	])
	return user as any[]
}

const createUserModel = async (user: Partial<User>) => {
	await dbpool.query(
		`INSERT INTO usuarios (nombre, correo, edad) 
             VALUES (?, ?, ?)`,
		[user.nombre, user.correo, user.edad || 0]
	)
}

const updateUserModel = async (id: number, user: Partial<User>) => {
	const updates = Object.keys(user)
	const query = `UPDATE usuarios SET ${updates.map(
		update => `${update} = ?`
	)} WHERE id = ?`
	const properties = [...Object.values(user), id]

	await dbpool.query(query, properties)
}

const deleteUserModel = async (id: number) => {
	await dbpool.query('DELETE FROM usuarios WHERE id = ?', [id])
}

export {
	getUsersModel,
	getUserModel,
	getUserByEmailModel,
	createUserModel,
	updateUserModel,
	deleteUserModel
}
