import { TUser } from "./user.interface";
import User from "./user.model";



const createUserIntoDB = async (userData : TUser) => {
    const user = await User.create(userData);
    return user;
} 


export const UserService = {   
    createUserIntoDB,

};