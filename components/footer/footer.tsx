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
            <div>
              <div style={{ textDecoration: "underline" }}>Links</div>
              <Link href="/">
                <a>
                  <div className={f.descriptionUnderTitle}>Home</div>
                </a>
              </Link>
              <Link href="/project">
                <a>
                  <div className={f.descriptionUnderTitle}>Project</div>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <div className={f.descriptionUnderTitle}>Contact</div>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <div className={f.descriptionUnderTitle}>About</div>
                </a>
              </Link>
            </div>
            <div>
              <div style={{ textDecoration: "underline" }}>Contact</div>
              <div className={f.descriptionUnderTitle}>
                ngnassim20@gmail.com
              </div>
              <Link href="https://github.com/NG20NG">
                <a target="_blank">
                  <div className={f.descriptionUnderTitle}>
                    github.com/NG20NG
                  </div>
                </a>
              </Link>
            </div>
            <div></div>
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
