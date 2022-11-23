import React, { useEffect, useState } from "react";
import gsap from "gsap";
import n from "./navBar.module.css";

const NavBar = () => {
  //=================================================================================
  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" },
  });
  //=================================================================================
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [linkTop, setLinkTop] = useState<String>("");
  const [linkBottom, setLinkBottom] = useState<String>("");
  //=================================================================================
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setClientWindowHeight(window.scrollY)
    );
    console.log(clientWindowHeight);

    if (clientWindowHeight >= 100) {
      gsap.to(`.${n.navBarContainer} > a`, {
        backgroundColor: "rgb(40, 42, 46)",
        color: "rgb(233, 233, 233)",
        right: 0,
      });
      gsap.to(`.${n.navBarContainer}`, { right: 0 });
    } else {
      gsap.to(`.${n.navBarContainer}`, { right: -100 });
    }
    if (clientWindowHeight >= 100 && clientWindowHeight < 270) {
      setLinkTop("#header");
      setLinkBottom("#presontation");
    }
    // project
    if (clientWindowHeight >= 270 && clientWindowHeight < 880) {
      setLinkTop("#header");
      setLinkBottom("#info");
    }
    if (clientWindowHeight >= 880 && clientWindowHeight < 1460) {
      setLinkTop("#presontation");
      setLinkBottom("#project");
    }
    if (clientWindowHeight >= 1460 && clientWindowHeight < 1991) {
      setLinkTop("#info");
      setLinkBottom("#contact");
    }
    if (clientWindowHeight >= 1991 && clientWindowHeight < 2240) {
      setLinkTop("#project");
      setLinkBottom("#footer");
    }
    if (clientWindowHeight >= 2240) {
      setLinkTop("#contact");
    }
  });
  //=================================================================================

  return (
    <div className={n.navBarContainer}>
      <div className={n.linkContainer1}>
        <a className={n.aLink} href={`${linkTop}`}>
          <div className={n.leftArrow1}></div>
          <div className={n.rightArrow1}></div>
        </a>
      </div>
      <div className={n.linkContainer2}>
        <a className={n.aLink} href={`${linkBottom}`}>
          <div className={n.leftArrow2}></div>
          <div className={n.rightArrow2}></div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
