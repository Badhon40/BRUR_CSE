import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navLinks = (
        <>
         <li>
            <Link href="/">Home</Link>
         </li>
         <li>
            <Link href='/academis' >Academics</Link>
         </li>
         <li>
            <Link href="admission">Admission</Link>
         </li>
         <li>
            <Link href='/notices'>Notices</Link>
         </li>
         <li>
            <Link href='/faculty'>Faculty</Link>
         </li>
         <li>
            <Link href='/facilities'>Facilities</Link>
         </li>
         <li>
            <Link href='/alumni'>Alumni</Link>
         </li>
        </>
    )

    return (
        <div className='bg-[#3F8AFF]'>
             <div className='flex justify-between' >
                <div>BRUR</div>
                <div>Login</div>
            </div>
            <div className="navbar  shadow-sm">

           
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   {
                    navLinks
                   }
                </ul>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                {
                    navLinks
                }
                </ul>
            </div>
            <div className="navbar-end">
               
            </div>
            </div>
        </div>
    );
};

export default Navbar;