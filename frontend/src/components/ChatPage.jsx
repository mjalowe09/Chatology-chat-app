import React from 'react'
import Waves from '../assets/wave.svg'
import Logo from '../assets/speech-bubble.png'

const ChatPage = () => {
  
  fetch('/chats')

  return (
    <div className='font-nunito'>
      <div className='absolute top-0 w-full shadow-md shadow-gray-700 flex py-3 px-5'> 
        <img className='w-10' src={Logo} />
        <h3 className='text-3xl sm:text-4xl font-extrabold pl-5'>Chatology</h3>
      </div>
      <div>
        <p className='text-center font-bold mx-auto mt-40 text-3xl'>Welcome, user! </p>
      </div>
      
      <img className='absolute bottom-0 -z-10' src={Waves} />
    </div>
  )
}

export default ChatPage