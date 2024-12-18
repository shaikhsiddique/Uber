import React from 'react'

function RidePopUp({setRidePopUpPanel,setConfirmRidePopUpPanel}) {
  return (
    <div className="w-screen px-3 ">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <h5
        onClick={()=>{
            setRidePopUpPanel(false);
        }}
        className="p-1 text-gray-300 text-3xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
    </div>
    
    <h3 className="text-2xl gap-2 font-semibold mb-3 text-black ">New Ride Available!</h3>
    <div className='flex items-center justify-between p-1 bg-yellow-300 rounded-lg mt-4'>
        <div className='flex items-center  gap-3 p-2'>
            <img  className="h-10 w-10 object-cover rounded-full"src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" />
            <h2 className='text-xl font-medium'>Siddique Shaikh</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
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
   <div className="w-full my-4 flex gap-3 ">
   <button onClick={()=>setConfirmRidePopUpPanel(true)}  className="w-full bg-green-600 text-white font-semibold p-2  rounded-lg ">
      Accept
    </button>
    <button onClick={()=>setRidePopUpPanel(false)} className="w-full bg-gray-300 text-gray-800 font-semibold p-2  rounded-lg ">
      Ignore
    </button>
   </div>
    </div>
  </div>
  )
}

export default RidePopUp