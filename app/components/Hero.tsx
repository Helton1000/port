/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/20/solid";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="mt-[10vh] h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center"
    >
      <Particle />
      <div className="mx-auto grid h-[100%] w-[80%] grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[35px] font-bold text-white md:text-[50px] ">
            Helton<span className="text-yellow-400"> Barbosa</span>
          </h1>
          {/* Definições */}
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            Bem-vindo ao meu portfólio! Sou Helton Barbosa, um entusiasta da
            tecnologia e aspirante a desenvolvedor full stack, dedicado a criar
            soluções inovadoras. Com um interesse especial em front-end, estou
            em uma missão para unir criatividade com tecnologia para construir
            projetos impactantes que façam a diferença.
          </p>
          {/* Botões */}
          <div className="mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row sm:space-x-2 sm:space-y-0">
            <div>
              <a
                href="/Currículo.pdf"
                download
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#55e6a5] px-[2rem] py-[1rem] text-[18px] font-bold uppercase text-black transition-all duration-200 hover:bg-yellow-400"
              >
                Download CV
                <ArrowDownCircleIcon className="h-[1.7rem] w-[1.6rem] text-black" />
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="https://github.com/Helton1000" target="_blank">
                <FaGithubSquare className="h-[4rem] w-[4rem] text-[#55e6a5] transition-all duration-200 hover:text-yellow-400" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hfbarbosa/"
                target="_blank"
              >
                <FaLinkedin className="h-[4rem] w-[4rem] text-[#55e6a5] transition-all duration-200 hover:text-yellow-400" />
              </Link>
            </div>
          </div>
        </motion.div>
        {/* Foto */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="relative ml-20 hidden h-[500px] w-[500px] items-center rounded-full lg:flex"
        >
          <Image
            src="/images/foto.jpg"
            alt="user"
            fill
            className="rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
