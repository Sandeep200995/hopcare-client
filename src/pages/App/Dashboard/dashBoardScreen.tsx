import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/page/Header/header";

function DashboardScreen() {
  const history: any = useNavigate();
  return (
    <div className="App">
      <Header></Header>
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
