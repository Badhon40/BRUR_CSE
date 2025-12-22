import { z } from 'zod';


const userValidationSchema = z.object({
    id : z.string(),
    password : z.string().min(6, 'Password is required').max(20, 'Password must be at most 20 characters'),
    needsPasswordChange : z.boolean().optional().default(true),
    role : z.enum(['admin', 'student', 'faculty']),
    status : z.enum(['inprogress', 'blocked']).default('inprogress'),
    isDeleted : z.boolean().optional().default(false),
})


export const UserValidation = {
    userValidationSchema
}