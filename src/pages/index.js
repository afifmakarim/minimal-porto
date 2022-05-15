import * as React from "react";
import { Fade, Roll } from "react-reveal";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Fade top>
        <Navbar />
      </Fade>
      <Fade left>
        <Main />
      </Fade>
      <Fade bottom>
        <Footer />
      </Fade>
    </Layout>
  );
};

export default IndexPage;
