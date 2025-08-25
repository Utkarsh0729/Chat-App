import React, { use, useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");  
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(currState == 'Sign Up' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* --------left--------- */}

      <img src={assets.logo_big} alt="" className='w-[min(30vw, 250px)]' />
      
      {/* --------right--------- */}
      <form 
      className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'
      onSubmit={onSubmitHandler} >
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {
            isDataSubmitted && 
            <img 
              src={assets.arrow_icon} 
              className='w-5 cursor-pointer' 
              onClick={() => setIsDataSubmitted(false)}
              alt="" />
          }
          
          
        </h2>
        {currState === "Sign Up" && !isDataSubmitted && (
          <input 
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text" 
          className='p-2 border border-gray-500 rounded-md focus:outline-none' 
          placeholder='Full Name' 
          required />
        )}

        {!isDataSubmitted && (
          <>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" 
          className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500' 
          placeholder='Email Address' 
          required/>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" 
          className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500' 
          placeholder='Password' 
          required/>
          </>
        )}

        {
          currState === "Sign Up" && isDataSubmitted && (
            <textarea 
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500' 
            placeholder='Provide a short Bio...' 
            rows={4}
            required></textarea>
          )
        }
        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white  cursor-pointer rounded-md'>
          {
            currState === "Sign Up" ? "Create Account" : "Login"
          }
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox"  className=''/>
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currState === "Sign Up" ? (
            <p className='text-sm text-gray-600'>Already have an account? 
              <span className='font-medium text-violet-500 cursor-pointer'
              onClick={() => {setCurrState("Login"); setIsDataSubmitted(false)}}>
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-600'>Create an account 
              <span className='font-medium text-violet-500 cursor-pointer'
              onClick={() => setCurrState("Sign Up")}>
                Click here
              </span>
            </p>
          )}
        </div>

      </form>
    </div>
  )
}

export default LoginPage