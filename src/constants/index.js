import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Sou um desenvolvedor Back-End apaixonado por criar soluções tecnológicas que realmente fazem a diferença. Especializado em desenvolver aplicativos web robustos, escaláveis e de alta performance, tenho experiência prática com Node.js, Express, MySQL e PostgreSQL, além de um compromisso sólido com boas práticas de desenvolvimento.
Meu objetivo é ir além do código: construir soluções inteligentes que resolvam problemas reais, impulsionem o crescimento dos negócios e proporcionem experiências excepcionais aos usuários. Sou motivado pelo aprendizado contínuo e pela oportunidade de colaborar com equipes inovadoras para enfrentar desafios e entregar resultados impactantes.`;

export const ABOUT_TEXT = `Sou um desenvolvedor apaixonado por tecnologia e sempre em busca de aprimorar minhas habilidades. Tenho experiência com JavaScript, Node.js, Express e PostgreSQL, além de uma sólida base em lógica de programação e programação orientada a objetos.
Atualmente, estou cursando Engenharia de Software, o que me permite aprofundar ainda mais meu conhecimento em arquitetura de sistemas, design patterns e melhores práticas de desenvolvimento.
Tenho uma abordagem focada em resolução de problemas, buscando sempre criar soluções eficientes e escaláveis. Meu objetivo é aplicar minha experiência técnica e minha formação acadêmica para enfrentar novos desafios, contribuindo para o desenvolvimento de sistemas robustos e de alto desempenho.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Trainee Desenvolvedor Back-End",
    company: "Desenvolve me.",
    description: `Período de mentoria com Marco Castro da DesenvolvendoMe. Nossa equipe tem oportunidade de adquirir e aperfeiçoar habilidades Hard Skills, Soft Skills, Mindset e Inteligência Emocional.`,
    technologies: ["Node.js", "React.js", "Linux", "Postgres", "Restful", "AWS", "Ruby", "Git"],
  },
  {
    year: "2021 - 2023",
    role: "Estagio Bancário",
    company: "Banrisul",
    description: `Atuei como estagiário no setor bancário, oferecendo suporte nas operações financeiras e administrativas da instituição.`,
    technologies: ["Clareza na comunicação", "Resolução de problemas", "Trabalho em equipe"],
  },
  
];

export const PROJECTS = [
  {
    title: "Travel-Tracker (Esta em construção)", 
    image: project1,
    description:
      "Servidor web utilizando Express, que se conecta a um banco de dados PostgreSQL para gerenciar um sistema de países visitados. O objetivo principal é permitir ao usuário adicionar países à lista de países visitados e exibir os países cadastrados.",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "HTTP"],
  },
  {
    title: "API-Authentication",
    image: project2,
    description:
      "Este projeto é uma aplicação Node.js com Express e Axios, que demonstra como usar diferentes métodos de autenticação ao acessar uma API externa. A aplicação interage com a API pública 'Secrets API' e retorna os dados para serem exibidos em uma página HTML gerada por EJS.",
    technologies: ["Node.js", "Express", "Axios", "API REST", "EJS"],
  },
  {
    title: "Nasa-Explorer",
    image: project3,
    description:
      "Este projeto é uma aplicação web que utiliza a API da NASA para exibir imagens e informações sobre o espaço. Ele foi construído com Node.js e Express, utilizando EJS. Rotas /: Página inicial. /APOD: Exibe a imagem astronômica do dia /Mars: Exibe fotos do rover Curiosity em Marte.",
    technologies: ["Node.js", "Tailwind CSS", "Express", "EJS", "Axios"],
  },
  {
    title: "React-Portfolio",
    image: project4,
    description:
      "O objetivo deste projeto foi construir uma aplicação moderna e responsiva que mostra minhas habilidades de desenvolvimento de software.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
  },
];

export const CONTACT = {
  address: "Brasil, Rio Grande do Sul.",
  phoneNo: "54 996896333.",
  email: "castilhosjoao16@gmail.com",
};
