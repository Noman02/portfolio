import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    tShirtDesign, 
    crypto,
    codeEditor,
    
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
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
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  // i do not need experiences

  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];

  // testimonials might be needed
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  //projects needed
  
  const projects = [
    {
      name: "AI 3D PRODUCT T-SHIRT CUSTOMIZER",
      description:
        "Load, create, and customize stunning 3D models T-Shirt, and geometries with various lights, as well as understand the 3D world with a camera and the positioning of an object in space. Responsiveness across all devices",
      tags: [
        {
          name: "react | threejs",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tShirtDesign,
      source_code_link: "https://github.com/Noman02/ai-3d-threejs-project",
      live_link: "https://ai-3d-project.netlify.app/"
    },
    {
      name: "CRYPTO HUB",
      description:
        "The purpose of this website is to provide users with information and tools related to digital currencies, such as Bitcoin, Ethereum, and others. This websites typically offer real-time price data, news and analysis, trading platforms, and manage cryptocurrencies. such as how to get started with buying and storing digital assets. Ultimately, the purpose of a the website is to serve as a one-stop-shop for all things related to cryptocurrencies and blockchain technology.",
      tags: [
        {
          name: "redux toolkit | ant design",
          color: "blue-text-gradient",
        },
        {
          name: "rapidApi",
          color: "green-text-gradient",
        },
        {
          name: "chart.js",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/Noman02/cryptoverse",
      live_link: "https://crypto-hub-react.netlify.app/ "
    },
    {
      name: "ONLINE CODE EDITOR COMPILER",
      description:
        "This is an online code editor and compiler is to provide a web-based platform for developers to write, edit, and test their code in real-time, developers can write code in html css javascript programming languages, test it,  users will be able to save their code to the database, and see the output all within the same interface. This helps to streamline the development process, increase productivity.",
      tags: [
        {
          name: "react | redux | jwt",
          color: "blue-text-gradient",
        },
        {
          name: "monaco editor",
          color: "green-text-gradient",
        },
        {
          name: "framer motion",
          color: "pink-text-gradient",
        },
      ],
      image: codeEditor,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, testimonials, projects };