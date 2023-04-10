import { CardHistoryContract } from "@/components/cards/card-history-contract";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-10 pt-5 max-w-[633px] w-full">
        <CardHistoryContract />
      </div>
    </div>
  );
};

// Home.Layout = LayoutHome;

export default Home;
