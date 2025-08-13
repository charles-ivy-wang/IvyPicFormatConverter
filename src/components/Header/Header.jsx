import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="main-container">
      <div className="home-button">
        <img src={assets.home2} alt="" />
      </div>

      <div className="desdoc-button">
        <img src={assets.info} alt="" />
      </div>
    </div>
  );
};

export default Header;
