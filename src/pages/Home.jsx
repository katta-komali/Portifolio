import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Snapshot from "../components/Snapshot";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Stage3Tools from "../components/Stage3Tools";
import WhatIBring from "../components/WhatIBring";
import Services from "../components/Services";
import CareerCTA from "../components/CareerCTA";
import RecruiterToolkit from "../components/RecruiterToolkit";
import ProfileHighlights from "../components/ProfileHighlights";
import CareerSnapshot from "../components/CareerSnapshot";

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Stage3Tools />
      <main id="main-content">
        <Hero />
        <Snapshot />
        <CareerSnapshot />
        <WhatIBring />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CareerCTA />
        <RecruiterToolkit />
        <ProfileHighlights />
        <Contact />
      </main>
      <Footer />
      <a className="back-to-top" href="#home" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}

export default Home;
