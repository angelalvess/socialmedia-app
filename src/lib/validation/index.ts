import * as z from 'zod'
export const SignupValidation = z.object({
  name: z.string().min(3, { message: 'Too short' }),
  username: z.string().min(5, { message: 'Too short' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Too short' }),
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Too short' }),
})
