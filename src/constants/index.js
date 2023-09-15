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
    // redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    apple,
    indeed,
    cnp,
    chainlink,
    eth,
    fcc,
    txstate,
    acc,
    carShowcase,
    chasing,
    financeApp,
    mycelium,
    naturalHazardApp,
    nft,
    gis

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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "GIS, Water, Natural Resources",
      icon: backend,
    },
    {
      title: "Smart Contract Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Eth",
      icon: eth,
    },
    {
      name: "Chainlink",
      icon: chainlink,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "Indeed",
      icon: indeed,
      iconBg: "#383E56",
      date: "April 2017 - March 2018",
      points: [
        "Gathering and analyis of data used by cross-functional teams within the Indeed Prime product.",
      ],
    },
    {
      title: "GIS Specialist",
      company_name: "Apple",
      icon: apple,
      iconBg: "#E6DEDD",
      date: "May 2018 - May 2019",
      points: [
        "Working with proprietary geospatial tools to perform a variety of geospatial tasks, including QC and pilot projects.",
        
        "Utilizing a Confluence/JIRA ticketing system, working in a collaborative and agile environment. Filing radars to resolve internal application issues. Nominated by peers for employee of the month twice.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: web,
      iconBg: "#383E56",
      date: "June 2018 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with customers to provide solutions such as API's, landing pages, and CMS management.",
        "Personal projects, education, and hackathons."
      ],
    },
    {
      title: "GIS Specialist",
      company_name: "Centerpoint Energy",
      icon: cnp,
      iconBg: "#E6DEDD",
      date: "May 2022 - May 2023",
      points: [
        "Utiliizing geospatial skills in gas infrastructure. Using tools including Esri ArcGIS, SAP, Adobe.", "QA/QC.", "Cross-functional and pilot projects."
      ],
    },
    {
      title: "3d Analyst",
      company_name: "Apple",
      icon: apple,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Utiliizing geospatial skills in a proprietary GIS architectures.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chainlink Hackathon 2022. Utilizing hybrid smart contracts, Chainlink, IPFS, Filecoin, Ceramic, NextJS, and React.",
      name: "Chainlink Hackthon",
      designation: "Awarded 'Top Quality Project' by",
      company: "Chainlink",
      image: chainlink,
    },
    {
      testimonial:
        "Certification in Responsive UI/UX. 300 hour, self-paced coursework with 5 final projects that pass technical standards.",
      name: "FreeCodeCamp.org",
      designation: "HTML/CSS, HTML5/CSS3, Javascript, React, Angular, API's",
      company: "300 hours",
      image: fcc,
    },
    {
      testimonial:
        "10+ years experience in GIS and mapping. Certifications from Texas State and ACC",
      name: "Geographic Information Systems",
      designation: "Relational Database, SQL, Python",
      company: "ArcGIS, DeckGL, Open-source",
      image: gis,
    },
    {
      testimonial:
        "Water Resource, Environmental Management, and GIS",
      name: "Texas State University",
      designation: "B.A. Water Resources",
      company: "3.3 GPA",
      image: txstate,
    },
    {
      testimonial:
        "Liberal Arts education and Leadership in Environmental Design (LEED's)",
      name: "Austin Community College",
      designation: "A.A. of Liberal Arts, LEED's Green Associate (GA) -",
      company: "U.S. Green Building Council (USGBC)",
      image: acc,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, car rentals from various providers, providing a convenient and efficient solution for comparing rental transportation costs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carShowcase,
      source_code_link: "https://github.com/LostnAustin/cars_showcase_project",
    },
    {
      name: "Mycelium Network",
      description:
        "A team of two, received award for 'Top Quality Project' in a Chainlink Hackathon of 300+ projects. We created a decentralized architecture, using hybrid smart contracts to provide in-situ IoT data for comparison with validated API data, and a GIS viewer. Using tech such as Chainlink, IPFS, Filecoin, and Ceramic.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Deck.gl",
          color: "green-text-gradient",
        },
        {
          name: "Web3 Blockchain IoT",
          color: "pink-text-gradient",
        },
      ],
      image: mycelium,
      source_code_link: "https://devpost.com/software/dopedata",
    },
    {
      name: "Blockchain Messaging App",
      description:
        "A React App utilizing Web3, Metamask, and Solidity to send GIF's and messages. Connects smart contract data to UI. Deployed on the Ropsten Testnet.",
      tags: [
        {
          name: "ETH",
          color: "blue-text-gradient",
        },
        {
          name: "Web3 Solidity",
          color: "green-text-gradient",
        },
        {
          name: "React Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chasing,
      source_code_link: "https://github.com/LostnAustin/web3GifApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  