import React from 'react'

function VehiclePanel({setPanelOpen,setvehiclePanel,setConfirmRidePanel}) {
  return (
    <div>
         <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
        <h5
            onClick={() =>{setPanelOpen(false); setvehiclePanel(false)} }
            className="absolute top-2 right-6 text-3xl "
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <div onClick={()=>{setConfirmRidePanel(true)}} className="flex items-center p-3 justify-between border-2  active:border-black rounded-xl">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="w-1/2">
            <div>
              <h4 className=" font-medium text-sm">
                Uber Go{" "}
                <span>
                  <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className=" font-medium text-sm">2 mins away</h5>
              <p className=" font-normal text-gray-600 text-xs">Affordable compact rides</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold">₹192.20</h2>
        </div>
        <div onClick={()=>{setConfirmRidePanel(true)}} className="flex items-center p-3 justify-between border-2 active:border-black rounded-xl">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2 ml-4">
            <div>
              <h4 className=" font-medium text-sm">
                Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>1
                </span>
              </h4>
              <h5 className=" font-medium text-sm">10 mins away</h5>
              <p className=" font-normal text-gray-600 text-xs">Affordable motorcycle rides</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold">₹65.70</h2>
        </div>
        <div onClick={()=>{setConfirmRidePanel(true)}} className="flex items-center p-3 justify-between border-2 active:border-black rounded-xl">
          <img
            className="h-16"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2 ml-4">
            <div>
              <h4 className=" font-medium text-sm">
                Uber Auto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className=" font-medium text-sm">2 mins away</h5>
              <p className=" font-normal text-gray-600 text-xs">Affordable auto rides</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold">₹118.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel