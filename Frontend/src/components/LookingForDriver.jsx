import React from 'react'

function LookingForDriver({setConfirmRidePanel,setVehicleFound}) {
  return (
    <div className="w-screen px-3 ">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <h5
        onClick={() => {
          setConfirmRidePanel(true)
          setVehicleFound(false);
        }}
        className="p-1 text-gray-300 text-3xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
    </div>
    
    <h3 className="text-2xl gap-2 font-semibold mb-3 text-black ">Looking for a driver</h3>
    <div className="w-full flex flex-col justify-between items-center ">
    <img
      className=" h-32 p-2"
      src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
      alt=""
    />
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

export default LookingForDriver