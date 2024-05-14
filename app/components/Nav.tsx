import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed top-0 z-[10000] h-[12vh] w-[100%] bg-[#141c27] shadow-md">
      <div className="mx-auto flex h-[100%] w-[80%] items-center justify-between">
        <a className="flex-[0.6]" href="#home">
          <h1 className="text-[25px] font-bold text-white">
            PORT
            <span className="text-yellow-300">FOLIO</span>
          </h1>
        </a>
        <a href="#sobre" className="nav-link">
          SOBRE
        </a>
        <a href="#skills" className="nav-link">
          SKILLS
        </a>
        <a href="#projetos" className="nav-link">
          PROJETOS
        </a>
        <a href="#cursos" className="nav-link">
          EXPERIENCIA
        </a>
        <a href="#contato" className="nav-link">
          CONTATO
        </a>
        {/* Menu hamburguer */}
        <div onClick={openNav}>
          <Bars3Icon className="h-[2rem] w-[2rem] cursor-pointer text-yellow-300 md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
