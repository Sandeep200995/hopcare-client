import React, { Suspense } from "react";
import "./App.css";
import { AppRouting } from "./router/appRouting";
import { AppLoaderContext } from "./contexts";

function App() {
  const { isAppLoader } = React.useContext(AppLoaderContext);
  return (
    <>
      {/* <ToastContainer /> */}
      {isAppLoader && (
        <div className="loader">
          <p>Loading...</p>
          {/* <Loader type="Puff" color="#00BFFF" height={100} width={100}  /> */}
        </div>
      )}
      <Suspense
        fallback={
          <div className="loader">
            <p>Loading...</p>
          </div>
        }
      >
        <AppRouting />
      </Suspense>
    </>
  );
}

export default App;
