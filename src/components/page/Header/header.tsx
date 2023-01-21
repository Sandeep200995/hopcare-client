import React from "react";
import "./header.scss";

import hmIcon from "../../../images/hm-menu.svg";
import { SideBarContext } from "../../../contexts";
import notification from "../../../assets/dummy/notification.png";
import userIcon from "../../../assets/dummy/user-icon.png";


interface HeaderProps {
  onClkHamBurger?: any;
}
function Header(props: HeaderProps) {
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);

  // function renderProfile() {
  //   return(
  //     <div className="user-profile">
  //       <img src={userIcon} alt="user-icon" />
  //     </div>
  //   )
  // }
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
      <div className="notification-user-login">

      <div className="notification-block">
        <button>
          <img src={notification} alt="notification" />
        </button>
      </div>

       {/* <div className="user-profile">
        <img src={userIcon} alt="user-icon" />
      </div> */}
      <div className="login-signup">
        <button>Login/Signup <br/> <span>( Patient )</span></button>
      </div>

      </div>
    </header>
  );
}

export default Header;
