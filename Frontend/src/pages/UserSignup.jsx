import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserDataContext } from '../context/UserContext';

function UserSignup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); 

    const newUser = {
      fullname: {
        fristname: fristName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);  
        localStorage.setItem("token",response.data.token);
        navigate("/home"); 
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }

   
    setemail('');
    setpassword('');
    setFristName('');
    setLastName('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form action="" onSubmit={submitHandler}>
          <h3 className='text-lg mb-2 font-medium'>What's Your Name</h3>
          <div className='flex gap-2 mb-5'>
            <input type="text" required value={fristName} onChange={(e) => setFristName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='First Name' />
            <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='Last Name' />
          </div>
          <h3 className='text-lg mb-2 font-medium'>What's Your Email</h3>
          <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='email@example.com' />
          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input type="password" required value={password} onChange={(e) => setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='password' />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base'>Sign up</button>
        </form>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center'>Already have an account? </p>
          <Link to="/login" className='text-blue-700'>Login</Link>
        </div>
      </div>
      <div>
        <p className=' text-[10px] leading-tight'>
          By signing up, you agree to Uber's <span className='text-blue-600 underline cursor-pointer'>Privacy Policy</span> and <span className='text-blue-600 underline cursor-pointer'>Terms of Service</span>. Your data is secure and used to enhance your experience.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
