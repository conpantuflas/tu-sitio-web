import React from "react";
import { Navbar } from "../components/Navbar";
//import { Router } from "@reach/router";
import { Presentation } from "../components/Presentation";
import { About } from "../components/About";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <About />
      <Plans />
    </div>
  );
};
