import React, { Suspense, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./App.css";
import { AppRouting } from "./router/appRouting";
import { AppLoaderContext, AuthContext } from "./contexts";
import { storage } from "./utills";
import { useDispatch } from "react-redux";
import loader from "../src/assets/dummy/loader-spinner.svg";
import * as AUTH_ACTIONS from "./redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "./redux/actions/Auth/types";


function App() {
  const { isAppLoader, setIsAppLoader } = React.useContext(AppLoaderContext);
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPersistUserData();
  }, [])

  async function fetchPersistUserData() {
    setIsAppLoader(true);
    let token = null;
    let userType = await storage.getData(storage.keys.USER_TYPE);
    if (!userType) {
      let resp = await storage.storeData(storage.keys.USER_TYPE, "consumer");
      console.log("No saved usertype found saving consumer as default.");

    }
    if (userType && userType === "consumer") {
      token = await storage.getData(storage.keys.TOKEN_CL);
    } else if (userType && userType === "clinic") {
      token = await storage.getData(storage.keys.TOKEN_HS);
    }
    console.log("token", token);
    console.log("userType", userType);
    // let userId = await storage.getData(storage.keys.USER_ID);
    // console.log("Fetching Users keys ",token  ,"-=-=-=", userType);
    if (token && userType) {
      // console.log("User token found");
      // console.log("fetching user details..");
      dispatch(AUTH_ACTIONS.fetchUserDetails({ formData: { userType: userType, userId: null }, token: token }));
      setIsAuthenticated(true);
      setIsAppLoader(false);
    } else {
      console.log("No User token found...");
      setIsAuthenticated(false);
      setIsAppLoader(false);
    }
  }

  // useEffect(() => {
  //   toast("Wow so easy!");
  // }, [])

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
