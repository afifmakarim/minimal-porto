import * as React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import { Fade, Zoom } from "react-reveal";

export default function About() {
  return (
    <Layout>
      <Navbar />
      <AboutSection />
      <Footer />
    </Layout>
  );
}
