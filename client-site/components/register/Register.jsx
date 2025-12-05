"use client"
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import React from 'react';

const Register = () => {
    return (
            <div className='w-md p-6  backdrop-blur-md rounded-4xl bg-[#D9D9D9]'>
            <h1 className='font-bold text-2xl text-center mb-4'>Register Now</h1>
           <form action="">
             <div >
                <Label className='py-2 font-bold text-lg'>Full Name</Label>
                <Input type="text" placeholder='Enter your name' />
            </div>
             <div >
                <Label className='py-2 font-bold text-lg'>Session</Label>
                <Input type="text" placeholder='Enter your Session' />
            </div>
             <div >
                <Label className='py-2 font-bold text-lg'>ID No</Label>
                <Input type="text" placeholder='Enter your ID No' />
            </div>
              <div >
                <Label className='py-2 font-bold text-lg'>Register No</Label>
                <Input type="text" placeholder='Enter your Register' />
            </div>
            <div className='mt-4'>
                <Label className='py-2 font-bold text-lg'>Password</Label>
                <Input type="password" placeholder='Enter your Password' />
            </div>

           <div className='items-center justify-center flex py-6'>
             <Button className='mt-6 px-16 bg-[#3d87ff] text-white py-2 rounded-full hover:bg-blue-700 transition-colors'>
                SignUp
            </Button>
           </div>
           </form>
           <Link href="/login">
           <h1 className='text-white font-semibold'>Have an account? <span className='text-[#3d87ff]'>Login In</span></h1>
           </Link>
        </div>
        
    );
};

export default Register;