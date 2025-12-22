import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    id : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,    
    },
    needsPasswordChange : {
        type : Boolean,
        default : true,
    },
    role : {
        type : String,
        enum : ['admin', 'student', 'faculty'],
        required : true,
    },
    status : {
        type : String,
        enum : ['inprogress', 'blocked'],
        default : 'inprogress',
    },
    isDeleted : {   
        type : Boolean,
        default : false,
    },
}, 
{    timestamps : true,  

})

const User = model<TUser>('User', userSchema);

export default User;