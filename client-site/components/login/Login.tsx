import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const Login = () => {
    return (
        <div className='w-md p-6  backdrop-blur-md rounded-4xl bg-[#D9D9D9]'>
            <h1 className='font-bold text-2xl text-center mb-4'>Login</h1>
            <div >
                <Label className='py-2 font-bold text-lg'>UserID</Label>
                <Input type="text" placeholder='Enter your UserID' />
            </div>
            <div className='mt-4'>
                <Label className='py-2 font-bold text-lg'>Password</Label>
                <Input type="password" placeholder='Enter your Password' />
            </div>

           <div className='items-center justify-center flex py-6'>
             <Button className='mt-6 px-16 bg-[#3d87ff] text-white py-2 rounded-full hover:bg-blue-700 transition-colors'>
                Login
            </Button>
           </div>
           <h1 className='text-white font-semibold'>Have an account? Create one <span className='text-[#3d87ff]'>Sign Up</span></h1>
        </div>
    );
};

export default Login;