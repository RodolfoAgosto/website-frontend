import React, { createContext, useContext, useState } from "react";

const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(""); // id actual

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
};
