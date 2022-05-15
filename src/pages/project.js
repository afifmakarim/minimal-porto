import * as React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ProjectSection from "../components/ProjectSection";
import Navbar from "../components/Navbar";

export default function Project() {
  return (
    <Layout>
      <Navbar />
      <ProjectSection />
      <Footer />
    </Layout>
  );
}
