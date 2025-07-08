import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className=' w-full flex'>
      <div className=" absolute w-full min-h-screen">
          <img src='/mentorlybg.jpg' alt='SignUp/ Mentorly banner' className='w-full object-fill min-h-screen min-w-screen'/>
      </div>
    
      <div className="w-full text-white relative text-center items-center py-100 font-bold text-5xl">
        <h1>Connect & learn with mentors <br></br>from around the world.</h1>
      </div>
    </div>
  )
}
