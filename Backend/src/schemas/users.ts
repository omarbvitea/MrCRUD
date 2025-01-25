import { z } from 'zod'

export const createUserSchema = z.object({
	nombre: z.string(),
	correo: z.string().email(),
	edad: z.number().int().optional()
})

export const updateUserSchema = z.object({
	nombre: z.string().optional(),
	correo: z.string().email().optional(),
	edad: z.number().int().optional()
})
