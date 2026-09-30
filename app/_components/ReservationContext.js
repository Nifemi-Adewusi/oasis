"use client";
import { createContext, useContext, useState } from "react";

// Channel Through which the shared state is created
const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };
// What ensures and wraps or serves as a parent for the channel to be shared
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => {
    setRange(initialState);
  };
  const [selectedCabin, setSelectedCabin] = useState("");
  return (
    <ReservationContext.Provider
      value={{ range, setRange, resetRange, selectedCabin, setSelectedCabin }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  // Returns the value that the ReservationProvider returns
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  //   Returns the value that the Provider wraps as value to the children
  return context;
}

export { ReservationProvider, useReservationContext };
