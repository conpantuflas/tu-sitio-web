import React from "react";
import { Navbar } from "../components/Navbar";
//import { Router } from "@reach/router";
import { Presentation } from "../components/Presentation";
import { About } from "../components/About";
import { Plans } from "../components/Plans";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar id="navbar" />
      <Presentation id="presentation" />
      <About id="about" />
      <Plans id="plans" />
      <Contact />
      <Footer />
    </>
  );
};
