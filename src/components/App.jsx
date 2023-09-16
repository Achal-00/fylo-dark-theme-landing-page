import React from "react";
import Navbar from "./Navbar/Navbar";
import LandingSection from "./LandingSection/LandingSection";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="bg-main-bg text-mobile-font landscape:text-desktop-font bg-main-bg">
      <Navbar />
      <LandingSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
