import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Katie Houser</title>
        <meta name="description" content="Art gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-7xl font-bold">Title</div>
    </div>
  );
};

export default Home;
