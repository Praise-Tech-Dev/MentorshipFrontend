import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

export default function SignUp() {
  return ( 
    
        <div className=' flex'>
          <div className=" absolute w-full ">
              <img src='/loginbg.jpg' alt='SignUp/ Login banner' className='w-full '/>
          </div>
  
          <div className="w-full relative">
              <SignUpForm/>
          </div>
        </div>
  )
}
