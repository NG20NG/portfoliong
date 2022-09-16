import type { NextPage } from "next";
import Head from "next/head";
//======================================================
import i from "../styles/index.module.css";
import ii from "../styles/index2.module.css";
//======================================================
import Carousel from "../components/indexCarousel/carousel";
import { useEffect } from "react";
//======================================================

const Home: NextPage = () => {
  const fetchingData = () => {
    fetch(
      "https://static.u.gg/assets/lol/riot_static/12.16.1/img/sprite/item2.webp"
    )
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchingData;
  }, []);

  return (
    <div className={i.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={i.main}>
        <div className={i.firstCardContainer}>
          <div className={i.cards}>
            <div className={i.leftBar}>
              <div className={i.leftBarDescriptionCard}>
                <p className={i.titleLeftBar}>presontation</p>
                <div className={i.pDescriptionContainer}>
                  <p
                    className={i.p1DescriptionLeftBar}
                  >{`je suis un junne developpeur web pain d'embission.`}</p>
                  <p className={i.p2DescriptionLeftBar}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur
                  </p>
                </div>
              </div>
            </div>
            <div className={i.rightBar}></div>
          </div>
        </div>
        <div className={ii.secondCardContainer}>
          <div className={ii.cards}>
            <div className={ii.leftBar}>
              <div className={ii.underLeftBarwhiteBorder}>
                <div className={ii.learnIndoReactNextjs}>
                  <Carousel />
                </div>
              </div>
            </div>
            <div className={ii.rightBar}>
              <div className={ii.secondRightBar}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ullam omnis vero expedita, vel cupiditate doloremque corporis
                nihil veniam consectetur enim eveniet
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
