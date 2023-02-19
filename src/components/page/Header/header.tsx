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
        <p>Logo</p>
      </div>
      <div className="notification-user-login">

        {props.addLeftBackBtn ? null : <div className="notification-block">
          <button>
            <img src={notification} alt="notification" />
          </button>
        </div>}

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
