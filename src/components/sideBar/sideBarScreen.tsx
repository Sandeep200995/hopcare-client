import React from "react";
import "./sidebar.scss";
import closeIcon from "../../images/close-window-100.png";
interface sideBarProps {
  onCloseBtnClk?: any;
  onSideBarActive?:any;
}
function SideBar(props: sideBarProps) {
  return (
    <aside className={`${props.onSideBarActive ? "side-bar active" : "side-bar "}`}>
      <button className="close-icon" onClick={props.onCloseBtnClk}>
        <img src={closeIcon} alt="close" />
      </button>

      <div className="side-items">
        <button>Home</button>
        <button>Dashboard</button>
        <button>About us</button>
        <button>Contact us</button>
        <button>Team</button>
        <button>Overview</button>
        <button>Chats</button>
        <button>What's new</button>
      </div>
    </aside>
  );
}

export default SideBar;
