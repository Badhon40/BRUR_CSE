import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDatabase = async (studentData: TStudent) => {
   const result = await StudentModel.create(studentData);
   return result;
}



export const StudentService = {
    createStudentIntoDatabase,
};  