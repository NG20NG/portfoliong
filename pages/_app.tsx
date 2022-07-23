import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import a from "../styles/app/app.module.css";
import f from "../styles/footer/footer.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  const style = {
    margin: "3px 0px",
    opacity: 0.5,
  };
  return (
    <div>
      <header className={a.header}>
        <nav className={a.nav}>
          <div>
            <span>NG</span>20
          </div>
          <ul>
            <Link href="/">
              <a className={a.navHomeBTN}>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/project">
              <a className={a.navProjectBTN}>
                <li>Project</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className={a.navContactBTN}>
                <li>Contact</li>
              </a>
            </Link>
            <Link href="about">
              <a className={a.navAboutBTN}>
                <li>About</li>
              </a>
            </Link>
          </ul>
        </nav>
        <div className={a.underNav}>
          <div>
            <p className={a.fadeInTopAnimation}>
              Salut à toi étranger je suis <span className={a.spanN}>N</span>
              assim
            </p>
            <p className={a.fadeInBottomAnimation}>
              ton développeur web préférait :D
            </p>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className={f.footer}>
        <div className={f.secondFooter}>
          <div className={f.topDivFooter}>
            <div className={f.footerDescription}>
              l'ambition d'être le meilleur
            </div>
            <div className={f.footerInfo}>
              <div>
                <div style={{ textDecoration: "underline" }}>Links</div>
                <Link href="/">
                  <a>
                    <div className={f.descriptionUnderTitle}>Home</div>
                  </a>
                </Link>
                <Link href="/croject">
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
    </div>
  );
}

export default MyApp;
