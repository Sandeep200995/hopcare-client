import React from "react";
import "./header.scss";

import hmIcon from "../../../images/hm-menu.svg";
import { SideBarContext } from "../../../contexts";
import notification from "../../../assets/dummy/notification.png";
interface HeaderProps {
  onClkHamBurger?: any;
}
function Header(props: HeaderProps) {
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  return (
    <header className="header">
      <div className="header-logo">
        <button className="hm-icon"
        onClick={() => toggleSidebar(!isSideActive)}
        >
          <img src={hmIcon} alt="hm-icon" />
        </button>
        <p>Logo</p>
      </div>
      <div className="notification-block">
        <button>
          <img src={notification} alt="notification" />
        </button>
      </div>
    </header>
  );
}

export default Header;
