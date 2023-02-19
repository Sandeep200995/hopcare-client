import React, { Suspense, useEffect } from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./App.css";
import { AppRouting } from "./router/appRouting";
import { AppLoaderContext, AuthContext } from "./contexts";
import loader from "../src/assets/dummy/loader-spinner.svg";
import { storage } from "./utills";

function App() {
  const { isAppLoader,setIsAppLoader } = React.useContext(AppLoaderContext);
  const { isAuthenticated,setIsAuthenticated } = React.useContext(AuthContext);

  useEffect(() => {
    fetchPersistUserData();
  }, [])

  async function fetchPersistUserData() {
    setIsAppLoader(true);
    let token = await storage.getData(storage.keys.TOKEN_CL);
    if (token) {
      console.log("User data found...");
      setIsAuthenticated(true);
      setIsAppLoader(false);
    } else {
      console.log("No User data found...");
      setIsAuthenticated(false);
      setIsAppLoader(false);
    }
  }

  useEffect(() => {
    // toast("Wow so easy!");
  }, [])


  return (
    <>
      <ToastContainer />
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
