import React, { useState } from "react";
import mm from "./mobileMenu.module.css";
import Link from "next/link";
import gsap from "gsap";

const MobileMenu = () => {
  const [condition, setCondition] = useState<Boolean>(false);
  const displayMenu = () => {
    if (condition === false) {
      gsap.to(`.${mm.nav}`, { height: "200px", duration: 0.2 });
    } else {
      gsap.to(`.${mm.nav}`, { height: "0px", duration: 0.2 });
    }
    setCondition((e) => (e = !e));
  };
  return (
    <div className={mm.mobileMenuContainer}>
      <nav className={mm.nav}>
        <ul>
          <a className={mm.navHomeBTN} href={"#home"}>
            <li>Home</li>
          </a>
          <a className={mm.navProjectBTN} href={"#project"}>
            <li>Project</li>
          </a>
          <a className={mm.navContactBTN} href={"#contact"}>
            <li>Contact</li>
          </a>
          <a className={mm.navAboutBTN}>
            <li>About</li>
          </a>
        </ul>
      </nav>
      <div className={mm.menuBTN} onClick={displayMenu}>
        <div></div>
      </div>
    </div>
  );
};

export default MobileMenu;
