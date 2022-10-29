import React from "react";
import "./sidebar.scss";

function SideBar() {
  return (
    <aside className="side-bar active">
      <div className="side-items">
        <button>Home</button>
        <button>Dashboard</button>
        <button>About us</button>
        <button>Contact us</button>
        <button>Team</button>
        <button>Overview</button>
        <button>Chat</button>
        <button>What's new</button>
      </div>
    </aside>

  );
}

export default SideBar;
