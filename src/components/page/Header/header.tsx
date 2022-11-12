import React from "react";
import "./header.scss";

import hmIcon from "../../../images/hm-menu.svg";
import { SideBarContext } from "../../../contexts";
interface HeaderProps {
  onClkHamBurger?: any;
}
function Header(props: HeaderProps) {
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  return (
    <header className="header">
      <div className="header-logo">
        <button className="hm-icon" onClick={() => toggleSidebar(!isSideActive)}>
          <img src={hmIcon} alt="hm-icon" />
        </button>
        <p>Logo</p>
      </div>
      <div>
        <p>Notification</p>
      </div>
    </header>
  );
}

export default Header;
