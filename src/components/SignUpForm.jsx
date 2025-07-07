import React, { useState } from "react";
// import { userLogin } from '../utils/api/usersApi'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [signUpError, setSignUpError] = useState(null)
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visibility, setVisibility] = useState(false);



  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = email.split('@')[0];
    const data = {
      name: name,
      email: email,
      password: password,
      role: role
    };

    try{
      const response = await axios.post("https://mentorshipbackend-fetn.onrender.com/api/auth/register", data)

      console.log("SignUp successful", response.user);

      if(response){
        // Save the user data to localStorage
        localStorage.setItem('auth', JSON.stringify(response.data))
        
        // Redirect to the home page or any other page
        window.location.href = '/login';
      }
      
    }catch(error){
      // setLoginError();
      console.error("Signup failed")
      setSignUpError("Invalid Credentials or Server Error.")
      
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

    setLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto">
      <div className="flex items-center">
        <h1 className="text-5xl  font-bold my-2 mr-3">Sign Up </h1>
        <div className="w-1/12 h-1/12  mr-3">
          <img src="/mentorlylogo.png" alt="Logo" className="w-full" />
        </div>
      </div>
      <p className="text-[20px]">
        Need someone to Guide You through your tech journey? Join Mentorly{" "}
      </p>
      <form className="flex flex-col ">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="border-[1px] border-white p-4 mt-7"
        />
        <select
          name="user-role"
          id="user-role"
          className="border-[1px] border-white p-4 mt-7 outline-none"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="mentee" className="bg-gray-900">
            Select Role--
          </option>
          <option value="mentor" className="bg-gray-900">
            Mentor
          </option>
          <option value="mentee" className="bg-gray-900">
            Mentee
          </option>
        </select>
        <div className="relative border  mt-7">
          <div
            onClick={() => setVisibility(!visibility)}
            className="absolute right-0 bottom-0 h-full border flex items-center cursor-pointer"
          >
            <i
              className={`px-5 pi ${
                visibility ? "pi-eye-slash" : "pi-eye"
              } text-lg`}
            ></i>
          </div>
          <input
            type={visibility ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="w-full border-[1px] border-white p-4"
          />
        </div>
        <div className="relative border  my-7">
          <div
            onClick={() => setVisibility(!visibility)}
            className="absolute right-0 bottom-0 h-full border flex items-center cursor-pointer"
          >
            <i
              className={`px-5 pi ${
                visibility ? "pi-eye-slash" : "pi-eye"
              } text-lg`}
            ></i>
          </div>
          <input
            type={visibility ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className="w-full border-[1px] border-white p-4"
          />
        </div>

        {loading ? (
          <button className="bg-blue-500 cursor-not-allowed rounded-4xl p-3 text-[16px] flex items-center justify-center gap-2">
            <i className="pi pi-spinner pi-spin "></i> Submitting
          </button>
        ) : (
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-700 hover:bg-blue-600 rounded-4xl p-3 text-[16px]"
          >
            Sign Up
          </button>
        )}
        {/* <p className='text-center'>or</p>
        <button className='bg-transparent border-white border-[1px] rounded-4xl p-3 text-[16px]'>
            <div>
            <div><i className="pi pi-apple text-white text-2xl"></i></div>
            <div>Sign in with Apple </div>
            </div>
            
        </button> */}
        <p className="py-3">
          Already have an account ?
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            {" "}
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
