import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

function Userlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); 
    const newUser = { email, password };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, newUser);
      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem("token",response.data.token);
        navigate("/home"); 
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    setemail('');
    setpassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={submitHandler}>
          <h3 className='text-xl mb-2'>What's Your Email</h3>
          <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='email@example.com'/>
          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input type="password" required value={password} onChange={(e) => setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='password'/>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center'>New here?</p>
          <Link to="/signup" className='text-blue-700'>Create new Account</Link>
        </div>
      </div>
      <div>
        <Link to="/captian/login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-4 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base'>Sign in as Captian</Link>
      </div>
    </div>
  );
}

export default Userlogin;
