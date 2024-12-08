import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptianSignup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();  
  

  const submitHandler = async (e) => {
    e.preventDefault();
    let newCaptian = {
      fullname: {
        firstname: fristName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
      status :"active"
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captian/register`, newCaptian);
      if (response.status === 201) {
        setCaptain(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/captian/home');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    setemail('');
    setpassword('');
    setFristName('');
    setLastName('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleType('');
  };

  return (
    <div className='p-5 flex flex-col justify-between h-auto max-h-[calc(100vh-100px)]'>
      <div>
        <img className='w-20 mb-1' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='' />
        <form action='' onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-1 font-medium'>What's Your Name</h3>
          <div className='flex gap-2 mb-3'>
            <input
              type='text'
              required
              value={fristName}
              onChange={(e) => setFristName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
              placeholder='Frist Name'
            />
            <input
              type='text'
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
              placeholder='Last Name'
            />
          </div>
          <h3 className='text-lg mb-1 font-medium'>What's Your Email</h3>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
            placeholder='captian@example.com'
          />
          <h3 className='text-lg mb-1 font-medium'>Vehicle Information</h3>
          <div>
            <div className='flex gap-3'>
              <input
                type='text'
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
                placeholder='Vehicle Color'
              />
              <input
                type='text'
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
                placeholder='Vehicle Plate No'
              />
            </div>
            <div className='flex gap-2'>
              <input
                type='text'
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
                placeholder='Vehicle Capacity'
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border-2 w-full text-lg'
              >
                <option value=''>Vehicle Type</option>
                <option value='car'>Car</option>
                <option value='motorcycle'>Moto</option>
                <option value='auto'>Auto</option>
              </select>
            </div>
          </div>
          <h3 className='text-lg mb-1 font-medium'>Enter Password</h3>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base'
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-1 rounded-md px-4 py-2 border-2 w-full text-lg'>
            Sign up
          </button>
        </form>
        <div className='flex flex-col items-center justify-center mb-2'>
          <p className='text-center'>Already have an account?</p>
          <Link to='/captian/login' className='text-blue-700'>
            Login
          </Link>
        </div>
      </div>
      <div>
        <p className='text-[9px] leading-tight'>
          By signing up, you agree to Captain's{' '}
          <span className='text-blue-600 underline'>Privacy Policy</span> and{' '}
          <span className='text-blue-600 underline'>Terms</span>. Your data is secure and used to enhance your experience.
        </p>
      </div>
    </div>
  );
}

export default CaptianSignup;
