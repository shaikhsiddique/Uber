import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CaptianRiding() {
  
  const [finishRide, setFinishRide] = useState(false)
  const finishRideRef = useRef(null);

  useGSAP(() => {
    if (finishRide) {
      gsap.to(finishRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRide]);

  return (
    <div className="h-screen ">
      
      <div className=" fixed flex items-center justify-between p-3 top-0 w-full ">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captian/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-home-4-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative" onClick={()=>setFinishRide(true)}>
        <h4 className="text-xl font-semibold tracking-tight">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-2  rounded-lg">
          Complete Ride
        </button>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <h5
          className="p-1 text-gray-900 text-3xl"
        >
          <i className="ri-arrow-up-wide-line"></i>
        </h5>
      </div>
      </div>
      <div
        className="fixed z-10 bottom-0 translate-y-full  py-6 pt-12 bg-white" ref={finishRideRef}
      >
       <FinishRide  setFinishRide={setFinishRide}/>
      </div>
    </div>
    
  );
}

export default CaptianRiding;
