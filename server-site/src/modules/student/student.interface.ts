import { ObjectId } from "mongoose"


export type TGuradian = {
    fatherName : string;
    fatherOccupation : string;
    fatherContactNo : string;
    motherName : string;
    motherOccupation : string;
    motherContactNo : string;
    address : string;
}

export type TName = {
    firstName : string;
    middleName ?: string;
    lastName : string;  
}


export type TStudent = {
    id : ObjectId;
    id_No : string;
    name : TName;
    academicSession : string;
    status : 'studying' | 'graduated';
    gender : 'male' | 'female' | 'other';
    profession?: string;      // e.g. "Graduate (Fresher)", "Software Engineer"
    company?: string;    // e.g. "Google", "Microsoft"
    dateOfBirth : string;
    email : string;
    contactNo : string;
    emergencyContactNo : string;
    bloodGroup ?:  'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress : string;
    permanentAddress : string;
    guardian : TGuradian;
    profileImage ?: string;
    isActive : 'active' | 'inactive';
}