import React from "react";
import mm from "./mobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div className={mm.mobileMenuContainer}>
      <div className={mm.menuBTN}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MobileMenu;
