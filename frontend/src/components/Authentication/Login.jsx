import { Button } from "@chakra-ui/button";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const submitHandler = async () => {
    setLoading(true);
    if( !email || !password){
      alert("Please enter all fields")
      setLoading(false)
      return
    }

    try{
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const { data }  = await axios.post(
        "http://localhost:5000/api/user/login",
        {email, password},
        config
      )
      setLoading(false);
      navigate('/chats')
    }catch (error){
      alert('Error occured!')
      setLoading(false)
    }
  };

  return (
    <div>
        <form className='px-10 py-10 bg-white rounded-lg'>
            <label className='font-bold text-sm' for="email">Email</label><br />
            <input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm'  id='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} required /><br />
            <label className='font-bold text-sm' for="password">Password</label><br />
            <input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm'  type={"password"} id='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} value={password} required /><br />

            <Button className='mt-8 bg-purple rounded-full w-full py-2 text-white mb-10' onClick={submitHandler}  isLoading={loading}>Login</Button>
            <button className='text-sm hover:underline mx-auto w-full mb-8'
            onClick={() => {setEmail("guest@example.com"),setPassword("123456")}}>
                Proceed as guest
            </button>
        </form>
    </div>
  )
}

export default Login