import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    tripguide,
    threejs,
    bootstrap,
    django,
    oracle,
    netlify,
    next,
    bidata,
    unne,
    accionpanal,
    qr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologiesFront = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  
   
  ];

  const technologiesBack = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Django",
      icon: django,
    },
  ];

  const technologiesBD = [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
  ];

  const technologiesTools = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Netlify",
      icon: netlify,
    },
  ];

  const technologiesLearning = [
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Next JS",
      icon: next,
    },
  ];


 
  const Socials = [
    {
      name: "Discord",
      src: "/instagram.svg",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
    },
    {
      name: "Instagram",
      src: "/discord.svg",
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Consultora Bidata",
      icon: bidata,
      iconBg: "#383E56",
      date: "Enero 2023 - December 2023",
      points: [
        "Desarrollo Web: Realicé la construcción de un sitio web basándome en el diseño proporcionado por los diseñadores.",
        "Consultas mediante APIs en diversas plataformas, mejorando la experiencia del usuario al utilizar distintos sitios web.",
        "Diseño Web: Creador de la apariencia visual de un sitio web, aporté creatividad y funcionalidad a cada detalle. La implementación fue un éxito, convirtiendo las ideas en una interfaz web efectiva y agradable a la vista.",
        "Sistema CRUD: Diseñé y desarrollé un sistema CRUD para una aplicación web, posibilitando la gestión integral de datos en una base de datos MongoDB. Implementé las funciones de Crear, Leer, Actualizar y Eliminar, ofreciendo una interfaz eficiente para interactuar con la base de datos."
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Unne",
      icon: unne,
      iconBg: "#E6DEDD",
      date: "Marzo 2023 - Mayo 2023",
      points: [
        "Servicios prestados a través de la asociación con Bidata.",
        "Desarrollo Web: Realicé la construcción del sitio web basándome en el diseño proporcionado por los diseñadores.",
        "ideas diseño: Propuse ideas al diseño, para mejorar la experiencia del usuario",
        "Consumir APIs: Consumi APIs para mostrar los propiedades en el sitio",
        "Manejo de herramientas: Aprendí herramientas como Mapbox y cloudinary"
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Acción Panal",
      icon: accionpanal,
      iconBg: "#fff",
      date: "Mayo 2022 - Junio 2023",
      points: [
        "Servicios prestados a través de la asociación con Bidata.",
        "Desarrollo Web: Realicé la construcción del sitio web basándome en el diseño proporcionado por los diseñadores.",
        "ideas diseño: Aporte ideas al diseño, para mejorar la experiencia del usuario",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "QR services",
      icon: qr,
      iconBg: "#fff",
      date: "Octubre 2023 - Diciembre 2023",
      points: [
        "Servicios prestados a través de la asociación con Bidata.",
        "Propuesta de diseño: Aporte ideas al diseño, para mejorar la experiencia del usuario tanto en la aplicación como en la página web",
        "Consumir APIs: Consumi APIs para mostrar los datos correspondientes en el sitio",
        "Diseñé y desarrollé un sistema CRUD para una aplicación web, posibilitando la gestión integral de datos en una base de datos MongoDB. Implementé las funciones de Crear, Leer, Actualizar y Eliminar, ofreciendo una interfaz eficiente para interactuar con la base de datos",
        
      ],
    },
  ];
  
  
  
 
  
  export { services, experiences, Socials, technologiesBD, technologiesBack, technologiesFront, technologiesTools, technologiesLearning };