import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-between py-2 px-30 m-auto items-center  bg-gray-900 text-white'>
        <div className='flex px-6'>
            <div className="w-1/12 h-1/12  mr-3">
                <img src="/mentorlylogo.png" alt="Logo" className='w-full' />
            </div>
            <div className="font-extrabold text-3xl"> Mentorly</div>
        </div>
      
      <div className="">
        <ul className='flex'>
            <li className="px-15"><a href="/">Home</a></li>
            <li className="px-15"><a href="/about">About</a></li>
            <li className="px-15"><a href="/services">Services</a></li>
            <li className="px-15"><a href="/contact">Contact</a></li>
            <li className="px-15"><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="">
        <button className='bg-blue-700 rounded text-white p-3 '><a href='/profile'>Dashboard</a></button>
      </div>
    </div>
  )
}
