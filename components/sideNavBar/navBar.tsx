import React, { useEffect, useState } from "react";
import gsap from "gsap";
import n from "./navBar.module.css";

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [link, setLink] = useState<String>("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" },
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(clientWindowHeight);

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
      <div className={n.linkContainer1}>
        <a className={n.aLink} href={""}>
          <div className={n.leftArrow1}></div>
          <div className={n.rightArrow1}></div>
        </a>
      </div>
      <div className={n.linkContainer2}>
        <a className={n.aLink} href={""}>
          <div className={n.leftArrow2}></div>
          <div className={n.rightArrow2}></div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
