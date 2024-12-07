import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptianSignup() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("");
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e)=>{
    setUserData({
      fullname : {
        fristname :fristName,
        lastname :lastName
      },
      email:email,
      password:password
    })
  
    e.preventDefault();
    setemail('');
    setpassword('');
    setFristName('');
    setLastName('');
    
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form action="" onSubmit={(e)=>submitHandler(e)}>
        <h3 className='text-lg mb-2 font-medium'>What's Your Name</h3>
        <div className='flex gap-2 mb-5'>
        <input type="text" required value={fristName} onChange={(e)=>setFristName(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='Frist Name'/>
        <input type="text" required value={lastName} onChange={(e)=>setLastName(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='Last Name'/>
        </div>
        <h3 className='text-lg mb-2 font-medium'>What's Your Email</h3>
        <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='email@example.com'/>
        <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
        <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}  className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' placeholder='password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 border-2 w-full text-lg placeholder:text-base' >Sign up</button>
      </form>
      <div className='flex flex-col items-center justify-center'><p className='text-center'>Already have a account? </p>
        <Link to="/captian-login" className='text-blue-700'>Login</Link></div>
      </div>
      <div>
       <p className=' text-[10px] leading-tight'>
       By signing up, you agree to Captain's <span className='text-blue-600 underline'>Privacy Policy</span> and <span className='text-blue-600 underline'>Terms</span>. Your data is secure and used to enhance your experience.
       </p>
      </div>
    </div>
  )
}

export default CaptianSignup