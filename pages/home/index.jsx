import Layout from "../../src/compenents/layouts/layout";
import Content from "./content";

const HomePage = () => {
  return (
    <>
      <Layout children={<Content />} />
    </>
  );
};

export default HomePage;
