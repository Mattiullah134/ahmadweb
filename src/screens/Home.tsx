import React from "react";
import { HeroSection } from "../components/HeroSection";
import Services from "../components/Services";
import ClientDetails from "../components/ClientDetails";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
    </div>
  );
};

export default Home;
