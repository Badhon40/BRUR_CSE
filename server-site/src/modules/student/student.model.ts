import { model, Schema } from "mongoose";
import { TGuradian, TName, TStudent } from "./student.interface";

const guardianSchema = new Schema<TGuradian>({
    fatherName : {
        type : String,
        required : true,
    },
    fatherOccupation : {    
        type : String,
        required : true,
    },
    fatherContactNo : {
        type : String,
        required : true,
    },
    motherName : {
        type : String,
        required : true,
    },
    motherOccupation : {
        type : String,
        required : true,
    },
    motherContactNo : {
        type : String,
        required : true,
    },
    address : { 
        type : String,
        required : true,
    },
});


const nameSchema = new Schema<TName>({
    firstName : {
        type : String,  
        required : true,
    },
    middleName : {      
        type : String,  
    },
    lastName : {    
        type : String,  
        required : true,
    },
});


const studentSchema = new Schema<TStudent>({
    id : {
        type : String,  
        required : true,
        unique : true,
    },  
    id_No : {
        type : String,
        required : true,
        unique : true,
    },
    name : {
        type : nameSchema,
        required : true,
    },
    academicSession : {
        type : String,
        required : true,    
    },
    status : {
        type : String,
        enum : ['studying', 'graduated'],
        default : 'studying',
    },
    profession : {
        type : String,
    },
    company : {
        type : String,
    },
    gender : {
        type : String,
        enum : ['male', 'female', 'other'],
        required : true,
    },
    dateOfBirth : {
        type : String,
        required : true,    
    },
    email : {
        type : String,  
        required : true,
        unique : true,
    },
    contactNo : {
        type : String,
        required : true,
        unique : true,
    },
    emergencyContactNo : {
        type : String,
        required : true,
    },
    bloodGroup : {  
        type : String,
        enum : ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },  
    presentAddress : {
        type : String,
        required : true,
    },
    permanentAddress : {
        type : String,
        required : true,
    },
    guardian : {
        type : guardianSchema,
        required : true,
    },
    profileImage : {
        type : String,  
    },
    isActive : {
        type : String,  
        enum : ['active', 'inactive'],
        default : 'active',
    },
}, 
{    timestamps : true,
})

export const StudentModel = model<TStudent>('Student', studentSchema);

