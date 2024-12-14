import React from "react";

function LocationSearchPanel({setvehiclePanel,setPanelOpen,panelOpen}) {
  const locations = [
    "47A, Next to Green Apple Bakery, Digital Academy, Jaipur",
    "12C, Opposite City Mall, Tech Zone Institute, Pune",
    "89B, Beside Metro Station Gate 2, Web Creators Hub, Bangalore",
    "17D, Near Blue Lagoon Park, Alpha Coders School, Chennai",
    "53A, Close to Downtown Plaza, Code Breakers Institute, Kolkata",
    "78B, Adjacent to Sunshine Towers, Cloud Innovators Academy, Delhi",
    "45C, Across from Harmony Square, Tech Explorers Academy, Hyderabad",
    "32A, Near Riverside Café, Full Stack Academy, Mumbai",
    "66D, Next to Victory Gardens, Frontend Developers Hub, Ahmedabad",
    "21B, Close to Old Town Library, Startup Coders School, Lucknow",
  ];

  if(!panelOpen){
    return <></>
  }

  return (
    <div>
      {/* sample data */}

      
      {locations.map((e,key) => {
        return (
          <div key={key} onClick={()=>{setvehiclePanel(true),setPanelOpen(false)}} className="flex w-full p-3 rounded-lg items-center gap-4 border-2 border-gray-200 justify-start my-3 hover:shadow-lg transition-all duration-300 active:border-black">
            <h2 className="bg-gray-100 h-12 w-12 flex items-center justify-center rounded-full text-gray-600 hover:text-black">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="text-lg font-semibold tracking-tight text-gray-800 hover:text-black">
              {e}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
