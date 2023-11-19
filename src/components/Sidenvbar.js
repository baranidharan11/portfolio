import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidenvbar.css";
function Sidenvbar() {
  return (
    <div className="sidenav">
      <input type="checkbox" id="menu" />
      <label className="icon" htmlFor="menu">
        <div className="menu"></div>
      </label>
      <nav>
        <ul>
          <NavLink to="/" activestyle={{fontweight:'bold',color:'blue'}}><li>
            <HomeIcon></HomeIcon>
            <div></div>
          </li></NavLink>
        </ul>
      </nav>
    </div>
  );
}
export default Sidenvbar;
