import React, { useEffect, useState } from "react";
import gsap from "gsap";
import n from "../../styles/sideNavBar/navBar.module.css";

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(clientWindowHeight);
    if (clientWindowHeight >= 100) {
      gsap.to(`.${n.navBarContainer}`, { right: 0 });
    } else {
      gsap.to(`.${n.navBarContainer}`, { right: -100 });
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className={n.navBarContainer}>
      <a href={"#home"}>Home</a>
      <a href={"#project"}>Project</a>
      <a href={"#contact"}>Contact</a>
      <a href={"#about"}>About</a>
    </div>
  );
};

export default NavBar;
