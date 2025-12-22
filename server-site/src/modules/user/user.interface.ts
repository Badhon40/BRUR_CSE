
export type TUser = {
    id : string;
    password : string;
    needsPasswordChange : boolean;
    role : 'admin' | 'student' | 'faculty';
    status : 'inprogress'| 'blocked' ;
    isDeleted : boolean;
}