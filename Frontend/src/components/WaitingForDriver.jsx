import React from 'react'

function WaitingForDriver({setWatingForDriver}) {
  return (
    <div className="w-screen px-3 ">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <h5
       onClick={()=>setWatingForDriver(false)}
        className="p-1 text-gray-300 text-3xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
    </div>
    <div className='flex items-center justify-between '>
    <img
      className=" h-20 p-1"
      src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
      alt=""
    />
    <div className='text-right p-1'>
      <h2 className='text-lg font-medium tracking-tight'>Siddique Shaikh</h2>
      <h4 className='text-xl font-semibold -my-1 '>MH11 AB 2020</h4>
      <p className='text-sm text-gray-600 '>Maruti Suzuki Alto</p>
    </div>
    </div>
   
    <div className="w-full flex flex-col justify-between items-center ">
   
    <div className="w-full p-1  ">
        <div className="flex items-center gap-5 border-b-2 py-2">
          <i className="ri-map-pin-user-fill text-lg"></i>
          <div>
              <h3 className="text-lg font-medium">562/11-A </h3>
              <p className="text-sm text-gray-600 -mt-1 ">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-b-2 py-2">
        <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
              <h3 className="text-lg font-medium">562/11-A </h3>
              <p className="text-sm text-gray-600 -mt-1 ">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex items-center gap-5 py-2">
        <i className="ri-currency-line text-lg"></i>
          <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm text-gray-600 -mt-1 ">Cash.</p>
          </div>
        </div>
    </div>
    </div>
  </div>
  )
}

export default WaitingForDriver