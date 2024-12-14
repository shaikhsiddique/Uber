import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

function Home() {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)
  const [watingForDriver, setWatingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ pickUp, destination });
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      panelCloseRef.current.classList.remove("hidden");
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration:0.3,
        padding: 0,
      });
      panelCloseRef.current.classList.add("hidden");
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehicleRef.current, {
        transform: "translateY(0)"
      });
    }
    else{
      gsap.to(vehicleRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)"
      });
    }
    else{
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      });
    }
    else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (watingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)"
      });
    }
    else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [watingForDriver]);
 

  return (
    <div className="h-screen relative w-screen  ">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div onClick={(e)=>{clg}} className="h-screen w-screen overflow-x-hidden">
        <img
          className="h-full w-screen object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-screen w-full flex flex-col justify-end absolute top-0 ">
        <div className="h-[30%] bg-white p-5 relative w-full">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-6 text-2xl hidden"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[44%] left-8 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
              value={pickUp}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickUp(e.target.value)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclePanel={setvehiclePanel} panelOpen={panelOpen}/>
        </div>
      </div>
      <div ref={vehicleRef} className="fixed z-10 bottom-0 translate-y-full  px-3 py-6 pt-12 bg-white">
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setPanelOpen={setPanelOpen} setvehiclePanel={setvehiclePanel}></VehiclePanel>
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 translate-y-full  py-6 pt-12 bg-white">
       <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 translate-y-full  py-6 pt-12 bg-white">
       <LookingForDriver setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={waitingForDriverRef}  className="fixed z-10 bottom-0 translate-y-full  py-6 pt-12 bg-white">
       <WaitingForDriver/>
      </div>
    </div>
  );
}

export default Home;
