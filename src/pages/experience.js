import * as React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ExperienceSection from "../components/ExperienceSection";
import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <Layout>
      <Navbar />
      <ExperienceSection />
      <Footer />
    </Layout>
  );
}
