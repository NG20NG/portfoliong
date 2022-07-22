import type { NextPage } from "next";
import Head from "next/head";
import i from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={i.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
