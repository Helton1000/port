import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="sobre" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[3rem] md:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-[1rem] text-[20px] font-bold uppercase text-[#55e6a5]">
            conheça mais
          </h1>
          <h2 className="mb-[3rem] text-[25px] font-bold capitalize leading-[2rem] text-white md:text-[35px] md:leading-[3rem] lg:text-[45px]">
            SOBRE<span className="text-yellow-400"> MIM</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span
              className="hidden h-[5px] w-[100px] rounded-sm
            bg-slate-400 md:block"
            ></span>
            <p className="w-[80%] text-[19px] text-slate-300">
              Olá! Meu nome é Helton Ribeiro Baborsa Filho, tenho 21 anos e moro
              em Manaus/Amazonas. Minha jornada na tecnologia começou há dois
              anos, quando me encantei com HTML durante um curso. Desde então,
              tenho me dedicado a aprimorar minhas habilidades e explorar o
              vasto mundo do desenvolvimento de software.
              <br />
              <br />
              Meu foco principal é me tornar um desenvolvedor front-end
              habilidoso, mas estou sempre buscando expandir meus conhecimentos
              para incluir o desenvolvimento back-end. Meu objetivo final é me
              tornar um desenvolvedor full-stack, capaz de criar soluções
              completas e inovadoras que proporcionem uma excelente experiência
              ao usuário.
              <br />
              <br />
              Estou constantemente aprendendo e evoluindo, sempre buscando novos
              desafios e oportunidades para crescer profissionalmente. Estou
              animado para compartilhar minha jornada e projetos com você!
            </p>
          </div>
          <a
            href="/Currículo.pdf"
            download
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#55e6a5] px-[2rem] py-[1rem] text-[18px] font-bold uppercase text-black transition-all duration-200 hover:bg-yellow-400"
          >
            Download CV
            <ArrowDownCircleIcon className="h-[1.7rem] w-[1.6rem] text-black" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="relative mx-auto mt-[2rem] hidden h-[300px] w-[300px] md:mx-0 md:block lg:mt-0 lg:h-[500px] lg:w-[500px]"
        >
          <Image
            src="/images/header.svg"
            alt="user"
            fill
            objectFit="contain"
            className="relative z-[11] ml-20 h-[100%] w-[100%] animate-wiggle object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
