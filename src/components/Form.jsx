import React, { useState, useEffect } from 'react'
// import { userLogin } from '../utils/api/usersApi'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const [loginError, setLoginError] = useState(null)
   
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      email: email,
      password: password,
    } 

    try{
      const response = await axios.post("https://mentorshipbackend-fetn.onrender.com/api/auth/login", data)

      console.log("Login successful", response.user);

      if(response){
        // Save the user data to localStorage
        localStorage.setItem('auth', JSON.stringify(response.data))
        
        // Redirect to the home page or any other page
        window.location.href = '/profile/edit';
      }
      
    }catch(error){
      // setLoginError();
      console.error("Login failed")
      setLoginError("Invalid Credentials or Server Error.")
      
      // console.error("Error logging in:", error);
      // alert("Login failed. Please check your credentials.");
    }

    // await userLogin(data).then(res=>{
    //   console.log('response from logoin', res.data);
    //   console.log('response from logoin', typeof(res.data));
    // localStorage.setItem('auth', JSON.stringify(res.data) )
    // navigate('/')
      
    // }).catch((err)=>{
    //   console.log('err occurred: ', err.response);

    // })


    setLoading(false)
  }

  return (
    
    <div className='bg-gray-900 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
      <div className='flex items-center'>
        <h1 className='text-5xl  font-bold my-2 mr-3'>Log in </h1>
        <div className="w-1/12 h-1/12  mr-3">
          <img src="/mentorlylogo.png" alt="Logo" className='w-full' />

        </div>
      </div>
      {loginError && <p className='text-red-500 text-sm'>{loginError}</p>}
      <p className='text-[20px]'>Develop your tech dreams with Mentorly </p>
      <form className='flex flex-col '>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' className='border-[1px] border-white p-4 mt-7'/>
        <div className='relative border  mt-7'>
          <div onClick={()=>setVisibility(!visibility)} className="absolute right-0 bottom-0 h-full border flex items-center cursor-pointer">
            <i className={`px-5 pi ${visibility? 'pi-eye-slash':'pi-eye'} text-lg`}></i>
          </div>
          <input type={visibility?'text':'password'} onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='w-full border-[1px] border-white p-4' />
        </div>
        <a href='' className='my-3 text-blue-400'>Forgot Password?</a>

        {
          loading ? 
          <button className='bg-blue-500 cursor-not-allowed rounded-4xl p-3 text-[16px] flex items-center justify-center gap-2'><i className='pi pi-spinner pi-spin '></i> Submitting</button>
          :
          <button onClick={(e)=>handleSubmit(e)} className='bg-blue-700 hover:bg-blue-600 rounded-4xl p-3 text-[16px]'>Sign in</button>
        }
        {/* <p className='text-center'>or</p>
        <button className='bg-transparent border-white border-[1px] rounded-4xl p-3 text-[16px]'>
            <div>
            <div><i className="pi pi-apple text-white text-2xl"></i></div>
            <div>Sign in with Apple </div>
            </div>
            
        </button> */}
        <p className='py-3'>New to Mentorly ? 
          <Link to='/signup' className='text-blue-400 hover:text-blue-500 underline'> Sign Up</Link></p>
      </form>
      
    </div>
  )
}
