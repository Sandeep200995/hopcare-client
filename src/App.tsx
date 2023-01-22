import React, { Suspense, useEffect } from "react";
import "./App.css";
import { AppRouting } from "./router/appRouting";
import { AppLoaderContext, AuthContext } from "./contexts";
import loader from "../src/assets/dummy/loader-spinner.svg";

function App() {
  const { isAppLoader } = React.useContext(AppLoaderContext);
  // const { isAuthenticated,setIsAuthenticated } = React.useContext(AuthContext);

  // useEffect(() => {
    // setTimeout(() => {
    //   setIsAuthenticated(true);
    // }, 10000);
  // }, [])

  return (
    <>
      {/* <ToastContainer /> */}
      {isAppLoader && (
        <div className="loader">
          <img src={loader} alt="loader" />
          {/* <Loader type="Puff" color="#00BFFF" height={100} width={100}  /> */}
        </div>
      )}
      <Suspense
        fallback={
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        }
      >
        <AppRouting />
      </Suspense>
    </>
  );
}

export default App;
