import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e)=>{
    setUserData({
      email:email,
      password:password
    })
    e.preventDefault();
    setemail('');
    setpassword('');
    
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form action="" onSubmit={(e)=>submitHandler(e)}>
        <h3 className='text-xl mb-2'>What's Your Email</h3>
        <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='email@example.com'/>
        <h3 className='text-xl mb-2'>Enter Password</h3>
        <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}  className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base' >Login</button>
      </form>
      <div className='flex flex-col items-center justify-center'><p className='text-center'>new here? </p>
        <Link to="/signup" className='text-blue-700'>Create new Account</Link></div>
      </div>
      <div>
        <Link to="/captian-login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-4 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base'>Sign in as Captian</Link>
      </div>
    </div>
  )
}

export default Userlogin