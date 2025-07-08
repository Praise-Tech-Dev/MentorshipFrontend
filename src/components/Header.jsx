import React from 'react';

export default function Header() {
  return (
    <div className='flex md:justify-between py-2 md:px-30  m-auto items-center  bg-gray-900 text-white w-full'>
        <div className='flex px-6'>
            <div className="w-1/12 h-1/12  mr-3 ">
                <img src="/mentorlylogo.png" alt="Logo" className='w-full' />
            </div>
            <div className="font-extrabold md:text-3xl text-xl "> Mentorly</div>
        </div>
      
        <div className="">
          
        </div>
      <div className="flex justify-between items-center px-2 md:gap-8">
        <ul className='flex justify-around md:gap-8'>
              <li className="px-2"><a href="/">Home</a></li>
              <li className="px-2"><a href="/login">Login</a></li>
          </ul>
        <button className='bg-blue-700 rounded text-white md:p-3 p-2 md:text-lg text-base '><a href='/profile'>Dashboard</a></button>
      </div>
    </div>
  )
}
