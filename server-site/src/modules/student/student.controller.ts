import { Request, Response } from "express";
import { StudentService } from "./student.service";


const createStudent = async ( req : Request , res : Response) =>{
        const studentData = req.body;

        const result = await StudentService.createStudentIntoDatabase(studentData);

        res.status(200).json({
            success : true,
            message : 'Student created successfully',
            data : result,
        });
}


export const studentController = {
    createStudent,
};