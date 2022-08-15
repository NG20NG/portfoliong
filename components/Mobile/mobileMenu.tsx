import React, { useState } from "react";
import mm from "./mobileMenu.module.css";
import Link from "next/link";
import gsap from "gsap";

const MobileMenu = () => {
  const [condition, setCondition] = useState<Boolean>(false);
  const displayMenu = () => {
    if (condition === false) {
      gsap.to(`.${mm.nav}`, { height: "180px", duration: 0.2 });
    } else {
      gsap.to(`.${mm.nav}`, { height: "0px", duration: 0.2 });
    }
    setCondition((e) => (e = !e));
  };
  return (
    <div className={mm.mobileMenuContainer}>
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
      <div className={mm.menuBTN} onClick={displayMenu}>
        <div></div>
      </div>
    </div>
  );
};

export default MobileMenu;
