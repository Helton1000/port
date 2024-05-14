import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const TESTE = [
    {
      year: "2023 - 2024",
      role: "Unity Developer",
      company: "Dungeons Adventures",
      description: `Como desenvolvedor Unity voluntário, desenvolvi interfaces interativas e suas funções, focando em UI/UX. Trabalhei na codificação do jogo, aplicando princípios de design de interface para garantir uma ótima experiência do usuário. Durante esse período, me mantive focado em resolver desafios técnicos complexos, aprimorando minhas habilidades de programação e design, fazendo isso na metodologia Scrum.`,
      technologies: ["C#", "Unity", "Java"],
    },
    {
      year: "2022 - 2023",
      role: "Curso Fullstack",
      company: "Progamador Br",
      description: `O curso abrange conceitos básicos do desenvolvimento web até as mais avançadas tecnologias, como Node.js, Firebase e React/React Native. Começando com HTML, CSS e JavaScript para criar páginas web estáticas. No lado do servidor, eles dominam a criação de APIs RESTful com Node.js e utilizam o Firebase para armazenar e gerenciar dados de forma eficiente.  capacitando-os a desenvolver aplicações full stack modernas ao final do curso.`,
      technologies: ["Firebase","Javascript", "NodeJS", "React"],
    },
    {
      year: "2021 - 2022",
      role: "Python",
      company: "Bradesco",
      description: `Curso, aonde fui introduzido aos conceitos fundamentais da linguagem, como sintaxe, estruturas de dados, controle de fluxo e funções. Aprendi a escrever scripts Python eficientes para automatizar tarefas, manipular dados e resolver problemas do mundo real. Além disso, serão abordados tópicos intermediários, como programação orientada a objetos, manipulação de arquivos, tratamento de exceções e uso de módulos e pacotes.`,
      technologies: ["Python"],
    },
    {
      year: "2020 - 2021",
      role: "React",
      company: "Origamid",
      description: `Este curso avançado de React que abrange tópicos avançados do React, como renderização otimizada, manipulação eficiente de estados complexos e técnicas avançadas de gerenciamento de dados com Redux ou Context API. Além disso, vou explorar práticas avançadas de roteamento, autenticação e autorização, e integrar APIs externas para criar aplicações web escaláveis e robustas.`,
      technologies: ["React", "Javascript"],
    },
  ];

  return (
    <div
      id="cursos"
      className="border-b border-neutral-900 bg-[#121212] pb-8 pt-[2rem] text-white md:pt-[4rem]"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold uppercase"
      >
        Exper<span className="text-yellow-400">iência</span>
      </motion.h1>
      <div className="ml-4 w-[90%]">
        {TESTE.map((teste, index) => (
          <div
            className="mb-8 flex flex-wrap md:justify-center lg:justify-center"
            key={index}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mt-3 w-full lg:w-1/4"
            >
              <p className="mb-2 text-center text-sm text-neutral-400">
                {teste.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mt-3 w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {teste.role} -{" "}
                <span className="text-sm text-purple-100">{teste.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{teste.description}</p>
              {teste.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-[#55e6a5]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
