const projects = [
  {
    id: 0,
    name: "Invoice App",
    slug: "invoice-app",
    excerpt:
      "This project is a multipage project that required me to build a fully responsive web-app that can be used to create and store invoices. I built this using React.JS, Styled Components, Typescript and Firebase for my authentication and database, I made sure the web-app is fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    description: `This project was a front-end challenge from <a href="https://www.frontendmentor.io">Frontend Mentor</a>. I took the project up so as to test and practice my Backend knowledge using firebase.The web-app requires users to sign up before they can be allowed to store data. Users can test the app by logging in anonymously, but can't modify any of the dummy data`,
    roles: [
      "Interaction Design",
      "Front End Development",
      "Backend Development ",
      "Firebase",
    ],
    languages: ["HTML5", "Styled Components", "React.JS", "Typescript"],
    websiteUrl: "https://invoice-app-fullstack.vercel.app/",
    githubUrl: "https://github.com/S-Devoe/invoice-app-fullstack.git",
    previousProject: "Room Homepage",
    previousProjectSlug: "room-homepage",
    nextProject: "Audiophile",
    nextProjectSlug: "audiophile",
  },
  {
    id: 1,
    name: "Audiophile Ecommerce",
    slug: "audiophile",
    excerpt:
      "This project was a multipage project that required me to build a fully responsive website using NextJS, SASS, Typescript and React-Redux. I had mobile and desktop designs to work to, and build it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    description:
      'This project was a front-end challenge from <a href="https://www.frontendmentor.io">Frontend Mentor</a>. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    roles: ["Interaction Design", "Front End Development"],
    languages: ["HTML5", "SCSS", "NextJS"],
    websiteUrl: "https://audiophile-ecommerce-nextjs.vercel.app/",
    githubUrl: "https://github.com/S-Devoe/audiophile-ecommerce.git",
    previousProject: "Invoice App",
    previousProjectSlug: "invoice-app",
    nextProject: "Countries",
    nextProjectSlug: "rest-countries",
  },
  {
    id: 2,
    name: "Countries",
    slug: "rest-countries",
    excerpt:
      "In this project, I built and develed a website that displays and show details about countries on planet earth.",
    description:
      "This project required me to fetch data from the REST Countries API, and then use this data to develop a functional and responsive website where users can search for a country, filter countries by their region, click on a country's card to see more details about it, and also check through to the border countries from the detail page.  Creating this project helped me to sharpen my coding and problem solving skills. ",
    roles: ["Interaction Design", "Front End Development"],
    languages: ["HTML5", "SCSS", "Next.JS", "React", "Typescript", "REST API"],
    websiteUrl: "https://fe-rest-country-api.vercel.app/",
    githubUrl: "https://github.com/S-Devoe/rest-country-api.git",
    nextProject: "Space Tourism",
    nextProjectSlug: "space-tourism",
    previousProject: "Audiophile",
    previousProjectSlug: "audiophile",
  },
  {
    id: 3,
    name: "Space Tourism",
    slug: "space-tourism",
    excerpt:
      "This was a multipage project that required me to build a fully responsive website with the design file (Figma file) provided. I used ReactJS, along with Styled Components to complete this challenge.",
    description:
      'This project was a front-end challenge from <a href="https://www.frontendmentor.io">Frontend Mentor</a>. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    roles: ["Interaction Design", "Front End Development"],
    languages: ["HTML", "Styled Components", "ReactJS"],
    websiteUrl: "https://space-tourism-fe.netlify.app/",
    githubUrl: "https://github.com/S-Devoe/space-tourism.git",
    nextProject: "Netflix Clone",
    nextProjectSlug: "netflix-clone",
    previousProject: "Countries",
    previousProjectSlug: "rest-countries",
  },

  {
    id: 4,
    name: "Netflix Clone",
    slug: "netflix-clone",
    excerpt:
      "In this project I cloned and built a responsive Netflix website using NextJS, Tailwind CSS, Typescript, and Firebase for authentication.",
    description:
      "This project was a side project i did on my own to test and practice my Typescript and Tailwind CSS knowledge  ",
    roles: ["Interaction Design", "Front End Development", "Authentication"],
    languages: ["HTML5", "Tailwind CSS", "ReactJS", "Firebase"],
    websiteUrl: "https://ntflx-dev.vercel.app/",
    githubUrl: "https://github.com/S-Devoe/ntflx-dev.git",
    previousProject: "Space Tourism",
    previousProjectSlug: "space-tourism",
    nextProject: "Room Homepage",
    nextProjectSlug: "room-homepage",
  },

  {
    id: 5,
    name: "Room Homepage",
    slug: "room-homepage",
    excerpt:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    description:
      'This project was a front-end challenge from <a href="https://www.frontendmentor.io">Frontend Mentor</a>. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    roles: ["Front End Development"],
    languages: ["HTML5", "CSS", "ReactJS", "React Responsive"],
    websiteUrl: "https://room-homepage-s-devoe.vercel.app/",
    githubUrl: "https://github.com/S-Devoe/room-homepage.git",
    previousProject: "Netflix Clone",
    previousProjectSlug: "netflix-clone",
    nextProject: "Audiophile",
    nextProjectSlug: "audiophile",
  },
];

export default projects;
