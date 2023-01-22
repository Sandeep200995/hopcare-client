import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import closeIcon from "../../images/close-window-100.png";
import { AuthContext } from "../../contexts";
import * as CONSTANTS from "../../constants/dummy";

interface sideBarProps {
  onCloseBtnClk?: any;
  onSideBarActive?: any;
}

function SideBar(props: sideBarProps) {
  const { isAuthenticated } = React.useContext(AuthContext);
  const [options, setOptions]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.LOGGED);

  useEffect(() => {
    // console.log("@Side bar isAuthenticated-->", isAuthenticated);
    if (isAuthenticated) {
      setOptions(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.LOGGED);
    } else {
      setOptions(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.WITHOUT_LOGGED);
    }
  }, [isAuthenticated])

  return (
    <aside className={`${props.onSideBarActive ? "side-bar active" : "side-bar "}`}>
      <button className="close-icon" onClick={props.onCloseBtnClk}>
        <img src={closeIcon} alt="close" />
      </button>
      <div className="side-items">
        {
          options.length ? options.map((opt: any, ind: number) => {
            return (<button key={`${ind}_${opt.name}`}>{opt.name}</button>)
          }) : null
        }
      </div>
    </aside>
  );
}

export default SideBar;
