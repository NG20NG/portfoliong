import Link from "next/link";
import React from "react";
import f from "../../styles/footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={f.footer}>
      <div className={f.secondFooter}>
        <div className={f.topDivFooter}>
          <div className={f.footerDescription}>
            {`l'ambition d'être le meilleur`}
          </div>
          <div className={f.footerInfo}>
            <div className={f.navBarFooterLinks}>
              <div className={f.footerNavBarTitle}>Navigation</div>
              <div className={f.footerNavBarLinks}>
                <div>Home</div>
                <div>Project</div>
                <div>Contact</div>
                <div>About</div>
              </div>
            </div>
            <div className={f.navBarFooterLinks}>
              <div>ngnassim20@gmail.com</div>
              <div>github.com/NG20NG</div>
            </div>
          </div>
        </div>
        <div className={f.bottomDivFooter}>
          @ 2021 Copyright : nassimng20.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
