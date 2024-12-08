import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

function CaptainContext({ children }) {
  const [captain, setCaptain] = useState({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain, isLoading, setIsLoading, error, setError }}>
      {children}
    </CaptainDataContext.Provider>
  );
}

export default CaptainContext;
