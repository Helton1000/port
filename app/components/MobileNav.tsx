import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const handleNavLinkClick = () => {
    closeNav(); // Fecha o MobileNav quando um item de navegação é clicado
  };

  return (
    <div
      className={`fixed ${navAnimation} bottom-0 left-0 right-0 top-0 z-[1000000] transform bg-[#09101a] transition-all duration-300`}
    >
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
        <a
          href="#home"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          HOME
        </a>
        <a
          href="#sobre"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          SOBRE
        </a>
        <a
          href="#skills"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          SKILLS
        </a>
        <a
          href="#projetos"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          PROJETOS
        </a>
        <a
          href="#cursos"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          CURSOS
        </a>
        <a
          href="#contato"
          className="nav-link-mobile"
          onClick={handleNavLinkClick}
        >
          CONTACT
        </a>
      </div>
      {/* Botao de fechar nav */}
      <div
        onClick={closeNav}
        className="absolute right-[2rem] top-[2rem] z-[100000000] h-[2rem] w-[2rem] cursor-pointer text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
