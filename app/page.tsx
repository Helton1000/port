"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

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
      </div>
    </main>
  );
};

export default Home;
