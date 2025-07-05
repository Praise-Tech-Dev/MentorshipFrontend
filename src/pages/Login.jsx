import React from 'react'
import Form from '../components/Form'

export default function Login() {
  return (
    <div className=' flex'>
        
        <div className=" absolute w-full ">
            <img src='/loginbg.jpg' alt='SignUp/ Login banner' className='w-full '/>
        </div>

        <div className="w-full relative">
            <Form/>
        </div>
    </div>
  )
}
