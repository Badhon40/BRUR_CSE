import { z } from 'zod';


const userValidationSchema = z.object({
    password : z.string(
        {
            message : 'Password must be a string',
        }
    ).min(6, 'Password is required').max(20, 'Password must be at most 20 characters').optional(),
   
})


export const UserValidation = {
    userValidationSchema
}