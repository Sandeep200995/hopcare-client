import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardScreen() {
  const history: any = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <p>Dashboard Screen</p>
      </header>
      <button
        onClick={() => {
          history(`/login`);
        }}
      >
        Hello
      </button>
    </div>
  );
}

export default DashboardScreen;
