// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Jenode Nakamoto",
  tagline: "A creative adult is a child who survived.",
  img: profile,
  about: `Professional Software Engineer who is capable of both Front-end and Back-end development. He is not only proficient in Web development but also best at creating high quality Mobile Applications.
  His most strength is his unlimited creativity.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/JuddyHopps",
  github: "https://www.github.com/JuddyHopps",
  twitter: "https://twitter.com/JuddyHopps",
  instagram: "https://www.instagram.com/JuddyHopps",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Stuzo`,
    Location: "Kiev Ukraine",
    Type: "Full Remote",
    Duration: "Sep 2021 - May 2023",
  },
  {
    Position: "Smart Contract developer",
    Company: `CBE China Blockchain Expert 中国区块链专家`,
    Location: "Full Remote",
    Type: "Full Remote",
    Duration: "Jan 2018 - Sep 2021",
  },
  {
    Position: "Freelancer",
    Company: `Remote`,
    Location: "Full Remote",
    Type: "Full Remote",
    Duration: "Sep 2017 - Jan 2018",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "GPA 3.90/4.0",
    Company: "Tokyo Online University",
    Location: "Online",
    Type: "Full Time",
    Duration: "Mar 2012 - Jan 2014",
  },
  {
    Position: "Bachelor in Computer Science",
    Company: `Online`,
    Location: "Bathurst, Australia",
    Type: "Full Time",
    Duration: "Mar 2014 - Jan 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Senior Mobile App Developer",
    image: projectImage1,
    description: `Responsibilities in the project:
    Highly concentrate on testing and improving software development and
    process skills in the development phase.
    Technologies:
    React-Native, Ionic, Swift, Java, Dagger 2, Databinding, MVVM, LiveData,
    Navigation, Multi-module architecture, Single Activity approach, unittesting
    ՄMockKՅ.
    Project Team Size: 10`,
    techstack: "HTML/CSS, JavaScript, PHP",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JuddyHopps",
  },
  {
    title: "Smart Contract developer",
    image: projectImage2,
    description: `Development smart contract on ETH, BSC, Polygon, Phantom,Atom,
    Ethereum Lite, Tron, Harmony, Klayton(new), Avalancheand Solana
    NFT protocols, DEFI protocols, Lending and Yield farmingprotocols.
    Token transferring from ethereum mainnet to xdai using AMB
    DeFi service (dex, lending/borrowing platforms) development
    Token ICO Presales`,
    techstack: "Solana, ETH",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JuddyHopps",
  },
  {
    title: "PlexyCube",
    image: projectImage3,
    description: `This project is a unique Quiz app. In other words, various QR codes are
    attached to the cube. The app scans the qr code using the camera and
    displays the appropriate question. A question once asked will not come
    up again.
    This was made according to the idea that several people use dice to
    randomly present questions and measure the scores accordingly.
    
    `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://play.google.com/store/apps/details?id=com.wirelesspay",
    githubLink: "https://github.com/JuddyHopps",
  },
  {
    title: "Trip Jungle",
    image: projectImage4,
    description: `This project is an app that helps you to tour the scenic spots of the
    jungle. You can see the history and culture of the scenic spot using AR technology, and there is a voice assistant using alexa. This project was
    created using android-java.
    In addition, various shortest routes and places are searched using the go
    ogle map function.
    The basic problem here was AR with pokeman-like functionality.
    `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JuddyHopps",
  },
  {
    title: "Pronouns",
    image: projectImage5,
    description: `This project is an educational app for kids.
    All UIs are automatically created by receiving data from the backend,
    an d by introducing a scoring system, this is a project that helps parents
    to always know and educate their children about their knowledge level.
    The basic problem was that, as it was for children, much was done
    through drag.
    It was made with react-native and includes various fields.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://play.google.com/store/apps/details?id=com.mayaal.pronoun",
    githubLink: "https://github.com",
  },
  {
    title: "WFG Finance",
    image: projectImage6,
    description: `This project was for a real estate company. When renting real estate,
    various calculations are carried out to calculate profit and loss, and
    various changes due to market price after 1 to 10 years, to calculate
    maintenance cost and write a report.
    The default here was math. I knew finance well and had to apply
    various mathematical formulas to calculate the corresponding values.
   
    `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JuddyHopps",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "fantasydev1225@gmail.com",
  phone: "+81 18242532212",
};
