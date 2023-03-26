import React from "react";
import "./header.scss";
import { AuthContext } from "../../../contexts";

import hmIcon from "../../../images/hm-menu.svg";
import backIcon from "../../../images/back-button.svg";
import { SideBarContext } from "../../../contexts";
import notification from "../../../assets/dummy/notification.png";
import userIcon from "../../../assets/dummy/user-icon.png";
import { useNavigate } from "react-router-dom";


interface HeaderProps {
  onClkHamBurger?: any;
  addLeftBackBtn?:boolean;
  backIconClk?:any;
}
function Header(props: HeaderProps) {
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { isAuthenticated } = React.useContext(AuthContext);

  const history: any = useNavigate();
  function handleLoginClk() { history('./login'); }

  return (
    <header className="header">
      <div className="header-logo">
        {props.addLeftBackBtn ?
          <button className="hm-icon" onClick={props.backIconClk}>
            <img src={backIcon} alt="hm-icon" />
          </button>
          :
          <button className="hm-icon" onClick={() => toggleSidebar(!isSideActive)}>
            <img src={hmIcon} alt="hm-icon" />
          </button>
        }
        <p>HOPcare </p>
        <span className="book-dr-tag"> Book your Doctor Now</span>
      </div>

      <div className="header-search">
        <input className="custom-search-input with-border-00" type="text" placeholder="Search here.." />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

      </div>

      <div className="notification-user-login">
        <p>About us</p>

        {/* {props.addLeftBackBtn ? null : <div className="notification-block">
          <button>
            <img src={notification} alt="notification" />
          </button>
        </div>} */}

        {
          isAuthenticated ? <div className="user-profile">
            <img src={userIcon} alt="user-icon" />
          </div>
            :
            <div className="login-signup">
              <button onClick={handleLoginClk}>Login <br /> <span>( Patient )</span></button>
            </div>
        }

      </div>
    </header>
  );
}

export default Header;
