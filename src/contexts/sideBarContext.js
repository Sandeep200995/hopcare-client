import React, { createContext, useState } from "react";

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isSideActive, toggleSidebar] = useState(false);
  return <SideBarContext.Provider value={{ isSideActive, toggleSidebar }}>{children}</SideBarContext.Provider>;
};

export { SideBarContext, SideBarProvider };
