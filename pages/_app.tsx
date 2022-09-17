import "../styles/globals.css";
import type { AppProps } from "next/app";
import a from "../styles/app/app.module.css";
/*==============================================================*/
import MobileMenu from "../components/Mobile/mobileMenu";
import Footer from "../components/footer/footer";
/*==============================================================*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className={a.header}>
        <nav className={a.nav}>
          <div>
            <span>NG</span>20
          </div>
          <ul>
            <a className={a.navHomeBTN} href={""}>
              <li>Home</li>
            </a>
            <a className={a.navProjectBTN} href={"#project"}>
              <li>Project</li>
            </a>
            <a className={a.navContactBTN} href={"#contact"}>
              <li>Contact</li>
            </a>
            <a className={a.navAboutBTN} href={"#about"}>
              <li>About</li>
            </a>
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
      <MobileMenu />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
