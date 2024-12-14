import React from "react";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen ">
        <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4 flex flex-col justify-between pb-8">
        <div className="flex items-center justify-between ">
          <img
            className=" h-20 p-1"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right p-1">
            <h2 className="text-lg font-medium tracking-tight">
              Siddique Shaikh
            </h2>
            <h4 className="text-xl font-semibold -my-1 ">MH11 AB 2020</h4>
            <p className="text-sm text-gray-600 ">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-between items-center ">
          <div className="w-full p-1  ">
            <div className="flex items-center gap-5 border-b-2 py-2">
              <i className="ri-map-pin-2-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A </h3>
                <p className="text-sm text-gray-600 -mt-1 ">
                  Lorem ipsum dolor sit amet.
                </p>
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
        <button className="w-full bg-green-600 text-white font-semibold p-2  rounded-lg ">
          Make a Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
