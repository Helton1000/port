import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projetos" className="bg-gray-900 pb-[3rem] pt-[5rem]">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="heading_mini heading">Trabalhos Recentes</p>
        <h1 className="heading_primary heading">
          Meus <span className="text-yellow-300">Projetos</span>
        </h1>
      </motion.div>

      <ProjectCard
        title="Portfolio"
        description="Meu portfólio é uma expressão da minha jornada no desenvolvimento web, destacando meu trabalho e habilidades. Desenvolvido com React, Next.js e TypeScript, utilizei tecnologias modernas para criar uma experiência dinâmica e responsiva. A estilização com Tailwind CSS proporciona um design limpo e elegante. Meu objetivo é mostrar meu trabalho, explorar e aprimorar minhas habilidades, e demonstrar meu compromisso com a excelência técnica e a constante evolução no campo do desenvolvimento web."
        tech="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/portfolio.png"
      />
      <ProjectCard
        title="Clone Steam"
        description='O "Steam Clone" é uma recriação da plataforma de jogos Steam, desenvolvida com React.js, JavaScript e CSS. Com recursos como useState e outros hooks do React, o projeto proporciona uma experiência interativa e responsiva. Ele replica recursos centrais da Steam, como catálogo de jogos, detalhes do jogo, carrinho de compras, garantindo uma experiência fluida e responsiva com o gerenciamento eficiente do estado da aplicação.'
        urlG="https://github.com/Helton1000/CloneSteam"
        urlD="https://clone-steam.vercel.app/"
        tech="React"
        tech2="CSS"
        tech3="Javascript"
        tech4="HTML"
        image="/images/projeto2.png"
      />
      <ProjectCard
        title="Clone Ifood - Mobile"
        description="O projeto é um clone do iFood, desenvolvido com abordagem Mobile First e tecnologias de ponta, com a intenção de estudar conceitos avançados do Next.js e suas novas funcionalidades. Utilizei Next.js para uma experiência dinâmica e responsiva, e Tailwind CSS para um design moderno. O PostgreSQL, com Prisma ORM, gerencia os dados de forma eficiente, garantindo desempenho consistente e segurança. Além disso, implementei autenticação pelo Google para uma experiência mais segura e prática, juntamente com rotas para uma navegação fluida. Meu objetivo é oferecer uma experiência de entrega de comida rápida, intuitiva e personalizada, demonstrando a eficácia dessas tecnologias de última geração."
        urlG="https://github.com/Helton1000/Clone-Ifood"
        urlD="https://clone-ifood-tau.vercel.app"
        tech="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="Typescript"
        tech6="NodeJS"
        tech5="PostgreSQL"
        tech7="Prisma"
        image="/images/ifood.png"
      />
      <ProjectCard
        title="Crud fullstack"
        description="Meu projeto é um aplicativo CRUD full stack, desenvolvido com JavaScript e tecnologias modernas. Utilizei Node.js com Express para o backend. Adotei MySQL como banco de dados e Docker para gerenciamento de contêineres. O objetivo é demonstrar minha habilidade em desenvolvimento full stack e explorar o potencial de tecnologias como JavaScript, Docker e MySQL para criar soluções eficientes e escaláveis."
        urlG="https://github.com/Helton1000/crud-fullstack"
        tech="Javascript"
        tech2="CSS"
        tech3="HTML"
        tech6="NodeJS"
        tech4="Docker"
        tech5="MySQL"
        image="/images/crud.jpg"
      />
    </div>
  );
};

export default Projects;
