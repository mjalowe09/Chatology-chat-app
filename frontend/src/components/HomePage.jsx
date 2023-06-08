import React, { useState,useEffect } from 'react'
import Waves from '../assets/wave.svg'
import Logo from '../assets/speech-bubble.png'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import '../index.css'

const HomePage = () => {
  const [toggleState, setToggleState] = useState(1)


  const toggleTab = (index) => {  
    setToggleState(index)
  }

  return (
    <div className='font-nunito text-gray-800'>
      <div className='w-full sm:w-fit mx-auto sm:mt-20 '>
        <div className='py-2 sm:py-5 px-8 sm:px-24 sm:rounded-md shadow-md shadow-gray-700 flex'>
          <img className='w-10' src={Logo} />
          <h3 className='text-3xl sm:text-4xl font-extrabold pl-5'>Chatology</h3>
        </div>
        <div className='rounded-md shadow-md shadow-gray-700 w-3/4 sm:w-full mx-auto mt-20 sm:mt-5'>
          <div className='flex justify-around py-2'>
            <button onClick={() => toggleTab(1)} id='login-btn' 
            className='px-8 mt-5 sm:mt-0 sm:px-16 py-1.5 text-sm rounded-full font-semibold hover:underline active focus:bg-purple  focus:text-white' aria-current="page">
              Login
            </button>
            <button onClick={() => toggleTab(2)} id='signup-btn' 
            className='px-8 mt-5 sm:mt-0  sm:px-16 py-1.5 text-sm rounded-full font-semibold hover:underline focus:bg-purple  focus:text-white'>
              Sign-up
            </button>
          </div>
          <div>
            {toggleState === 1 ? (
              <Login />
            ) : (<Signup />)}
          </div>
        </div>
      </div>
      <img className='absolute bottom-0 -z-10' src={Waves} />
    </div>
  )
}

export default HomePage