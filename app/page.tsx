"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const Home = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
      </div>
      <div className="relative z-[30]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
