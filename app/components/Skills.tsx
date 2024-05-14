import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills">
      <div className="bg-[#121212] pb-[5rem]  pt-[7.4rem]">
        <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[3rem] lg:grid-cols-7">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="col-span-3"
          >
            <h1 className="text-[28px] font-bold uppercase text-white sm:text-[33px] md:text-[45px]">
              Habil<span className="text-yellow-400">idades</span>
            </h1>
            <p className="mb-[1.5rem] mt-[1.5rem] text-[15px] text-white opacity-70">
              Sempre tive uma paixão por explorar novas tecnologias e me manter
              atualizado com as tendências do mercado de trabalho. Desde os meus
              primeiros dias de estudo, quando fui introduzido à linguagem C# na
              escola, fiquei fascinado com a ideia de aprender novas linguagens
              e ampliar meu conhecimento.
              <br />
              <br />
              Ao longo do tempo, explorei várias linguagens como C++, Python e
              C#, mas minha paixão pelo desenvolvimento de interfaces gráficas
              me levou a focar meus estudos no Desenvolvimento Front-end. Possuo
              experiência sólida em tecnologias essenciais como HTML, CSS,
              Tailwind, JavaScript e TypeScript, além de frameworks como React
              JS, React Native e Bootstrap. Com conhecimentos em Node.js e
              Python, estou pronto para explorar oportunidades tanto no
              front-end quanto no back-end.
              <br />
              <br />
              Estou sempre em busca de novos desafios e oportunidades para
              aprimorar minhas habilidades e contribuir para projetos
              inovadores. Estou animado para continuar minha jornada no mundo da
              tecnologia e criar experiências digitais excepcionais para os
              usuários.
            </p>
          </motion.div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 items-center gap-[1rem] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
              <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                <SkillCard
                  title="React JS"
                  image="/images/react.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
              >
                <SkillCard
                  title="HTML-5"
                  image="/images/html5.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
              >
                <SkillCard
                  title="Javascript"
                  image="/images/javascript.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
              >
                <SkillCard
                  title="Typescript"
                  image="/images/typescript.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
              >
                <SkillCard
                  title="CSS3"
                  image="/images/css.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
              >
                <SkillCard
                  title="NodeJS"
                  image="/images/nodejs.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
              >
                <SkillCard
                  title="Next JS"
                  image="/images/nextjs.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="800"
              >
                <SkillCard
                  title="Python"
                  image="/images/python.svg"
                  level="Intermediario"
                />
              </div>
              <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                <SkillCard
                  title="Java"
                  image="/images/java.svg"
                  level="Intermediario"
                />
              </div>
              <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                <SkillCard
                  title="Tailwind"
                  image="/images/tailwind.svg"
                  level="Intermediario"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
