import React, { useState } from "react";
import mm from "./mobileMenu.module.css";
import Link from "next/link";
import gsap from "gsap";

const MobileMenu = () => {
  const [condition, setCondition] = useState<Boolean>(false);
  const displayMenu = () => {
    if (condition === false) {
      gsap.to(`.${mm.mobileMenuContainer}`, { height: "170px" });
      gsap.to(`.${mm.menuBTN}`, { top: "289px" });
    } else {
      gsap.to(`.${mm.mobileMenuContainer}`, { height: "0px" });
      gsap.to(`.${mm.menuBTN}`, { top: "119px" });
    }
    setCondition((e) => (e = !e));
    console.log(condition);
  };
  return (
    <div className={mm.mobileMenuContainer}>
      <div className={mm.menuBTN} onClick={displayMenu}>
        <div></div>
      </div>
      <nav className={mm.nav}>
        <ul>
          <Link href="/">
            <a className={mm.navHomeBTN}>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/project">
            <a className={mm.navProjectBTN}>
              <li>Project</li>
            </a>
          </Link>
          <Link href="/contact">
            <a className={mm.navContactBTN}>
              <li>Contact</li>
            </a>
          </Link>
          <Link href="about">
            <a className={mm.navAboutBTN}>
              <li>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
