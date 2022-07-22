import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import a from "../styles/app/app.module.css";

function MyApp({ Component, pageProps }: AppProps) {
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
    </div>
  );
}

export default MyApp;
