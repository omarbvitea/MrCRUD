import { Request, Response, NextFunction } from 'express'
import { z, ZodError } from 'zod'

export const validate = (schema: z.ZodObject<any, any>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body)
			next()
		} catch (error) {
			if (error instanceof ZodError) {
				res.status(400).json({
					message: 'Validation error',
					errors: error.errors
				})
			} else {
				res.status(500).json({
					message: 'Internal server error'
				})
			}
		}
	}
}
