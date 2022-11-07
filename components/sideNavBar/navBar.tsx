import React, { useEffect, useState } from "react";
import gsap from "gsap";
import n from "./navBar.module.css";

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (clientWindowHeight >= 100) {
      gsap.to(`.${n.navBarContainer}`, { right: 0 });
      gsap.to(`.${n.navBarContainer} > a`, {
        backgroundColor: "rgb(40, 42, 46)",
        color: "rgb(233, 233, 233)",
      });
      gsap.to(`.${n.navBarContainer}`, { right: 0 });
    } else {
      gsap.to(`.${n.navBarContainer}`, { right: -100 });
      gsap.to(`.${n.navBarContainer}`, { right: -100 });
      gsap.to(`.${n.navBarContainer}`, { right: -100 });
    }
    if (clientWindowHeight >= 580) {
      gsap.to(`.${n.navBarContainer} > a`, {
        backgroundColor: "white",
        color: "black",
      });
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
