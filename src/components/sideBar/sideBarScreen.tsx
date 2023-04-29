import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import closeIcon from "../../images/close-window-100.png";
import { AuthContext } from "../../contexts";
import { storage } from "../../utills";
import * as CONSTANTS from "../../constants/dummy";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface sideBarProps {
  onCloseBtnClk?: any;
  onSideBarActive?: any;
}

function SideBar(props: sideBarProps) {
  const history = useNavigate();
  const { isAuthenticated ,setIsAuthenticated} = React.useContext(AuthContext);
  const [userType,setUserType]:any = useState("consumer");
  // const userState = useSelector((state: any) => state.userData);
  const [options, setOptions]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.LOGGED);

  useEffect(() => {
    // console.log("@Side bar isAuthenticated-->", isAuthenticated);
    // console.log("userState",userState);
    if (isAuthenticated) {
      if (userType === "clinic") { setOptions(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.LOGGED_CLNIC); }
      else { setOptions(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.LOGGED); }
    } else {
      setOptions(CONSTANTS.DEFAULT_DUMMY_DATA.SIDEBAR_OPTIONS.WITHOUT_LOGGED);
    }
  }, [isAuthenticated, userType])

  useEffect(() => {
    async function fetchUserType() {
      try {
        let _userType = await storage.getData(storage.keys.USER_TYPE);
        if (_userType) { setUserType(_userType); }
      } catch (err) {
        console.log("Failed to fetch user Type in side menu", err);
      }
    }
    fetchUserType();
  }, [])


  async function handleClkSideBarOpt(side_item: any) {
    // console.log("side_item-->", side_item);
    if (side_item.name === "Logout") {
      let clearStore = await storage.clear();
      console.log("clearStore resp ", clearStore);
      props.onCloseBtnClk();
      history("/", { replace: true });
      setIsAuthenticated(false);
    } else {
      history(side_item.path, { replace: true });
      props.onCloseBtnClk();
    }
  }

  return (
    <aside className={`${props.onSideBarActive ? "side-bar active" : "side-bar "}`}>
      <button className="close-icon" onClick={props.onCloseBtnClk}>
        <img src={closeIcon} alt="close" />
      </button>
      <div className="side-items">
        {
          options.length ? options.map((opt: any, ind: number) => {
            return (<button onClick={()=>handleClkSideBarOpt(opt)} key={`${ind}_${opt.name}`}>{opt.name}</button>)
          }) : null
        }
      </div>
    </aside>
  );
}

export default SideBar;
