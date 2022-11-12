import React, { Suspense } from "react";
import "./App.css";
import { AppRouting } from "./router/appRouting";
import { AppLoaderContext } from "./contexts";
import loader from "../src/assets/dummy/loader-spinner.svg";

function App() {
  const { isAppLoader } = React.useContext(AppLoaderContext);
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
