import Layout from "../../src/compenents/layouts/layout";
import Content from "./content";

// const HomePage = () => {
//   return (
//     <>
//       <Layout children={<Content />} />
//     </>
//   );
// };

// export default HomePage;

import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Killian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Content />
      </Layout>
    </>
  );
};

export default HomePage;
