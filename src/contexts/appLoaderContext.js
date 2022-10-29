import React, { createContext, useState } from "react";

const AppLoaderContext = createContext();

const AppLoaderProvider = ({ children }) => {
  const [isAppLoader, setIsAppLoader] = useState(false);
  return <AppLoaderContext.Provider value={{ isAppLoader, setIsAppLoader }}>{children}</AppLoaderContext.Provider>;
};

export { AppLoaderContext, AppLoaderProvider };
