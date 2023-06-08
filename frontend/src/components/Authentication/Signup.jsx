import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      alert('Please enter missing fields')
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      alert('Password do not match')
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      navigate('/chats');
    } catch (error) {
      alert("error occured")
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      alert('undefined image')
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "do8m2iopa");
      fetch("https://api.cloudinary.com/v1_1/do8m2iopa/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      alert('Please select an image')
      setPicLoading(false);
      return;
    }
  };

  return (
    <div>
        <form className='px-10 pt-3 bg-white rounded-md'>
					<label className='font-bold text-sm' for="name">Name</label><br />
					<input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm' id='first-name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required /><br />
					<label className='font-bold text-sm' for="email">Email</label><br />
					<input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm'  id='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required /><br />
					<label className='font-bold text-sm' for="password">Password</label><br />
					<input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm'  type={"password"} id='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required /><br />
					<label className='font-bold text-sm' for="password">Confirm Password</label><br />
					<input className='p-1.5 w-full bg-violet-100 rounded-md mb-1 text-sm'  type={"password"} id='password' placeholder='Enter Your Password' onChange={(e) => setConfirmpassword(e.target.value)} required /><br />
					<label className='font-bold text-sm' for="profile-picture">Profile Picture</label><br />
					<input className='font-bold text-sm border w-48' type="file" id='pic' p={1.5} accept="image/*" onChange={(e) => postDetails(e.target.files[0])}  required /><br />

					<Button className='mt-8 bg-purple rounded-full w-full py-2 text-white mb-10' onClick={submitHandler}  isLoading={picLoading}>Sign Up</Button>
        </form>
    </div>
  )
}

export default Signup