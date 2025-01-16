import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haider Ali",
  initials: "HA",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/Lahore",
  about:
    "Rust Developer dedicated to improve web3 world.",
  summary:
    "As a Rust Developer, I specialize in decentralized systems, substrate and EVM based chains, evm smart contract, web servers and enthusiast to work in cryptography and Zero knowledge proofs. I have also worked in the field of AI improving and building multiple image processing models, fetching OCR from images and LLMs.",
  avatarUrl: undefined,
  personalWebsiteUrl: "",
  contact: {
    email: "haiderali.tech_786@outlook.com",
    tel: "+923174103066",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Haider-Ali-DS",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haider-rs/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Virtual University of Pakistan",
      degree: "Bachelor's in Computer Science",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Analog",
      link: "https://analog.one",
      badges: ["Remote"],
      title: "Senior Rust Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Working on Multiple projects Substrate based Analog blockchain node / Timechain node. Multichain connectivity library i.e. Chain-Connectors. Solidity Smart contracts and Other R&D based solutions.",
    },
    {
      company: "Invozone",
      link: "https://invozone.com",
      badges: ["Remote/Onsite"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Worked in javascript to build solana nft marketplace and on customization of Solana smart contracts in Rust. Outsourced to Analog as a Rust Developer.",
    },
    {
      company: "Programmers Force",
      link: "https://pf.com.pk",
      badges: ["Onsite"],
      title: "Python Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Worked as Python developer wrote tools for improving data pre and post processing pipelines for their AI models. Also Improved Object detection models using MRCNN and YOLO 5. Trained Multiple OCR Model and made the pipeline to train model OCR models for multiple languages and improved their text reading accuracy from 70% to 90%.",
    },
    {
      company: "Cybersoft North America Inc.",
      link: "https://csnainc.com/",
      badges: ["Onsite"],
      title: "Junior Software Engineer",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2021",
      description:
        "Worked as Software Engineer in C#/Xamarin. Built multiple Xamarin supported apps for Android, IOS and Windows.",
    },
  ],
  skills: [
    "Rust",
    "Substrate",
    "Distributed Networking/Libp2p",
    "Solidity",
    "Yul",
    "Python",
    "TypeScript",
    "Blockchain",
    "Web Server",
    "GraphQL",
  ],
  projects: [
    {
      title: "Analog Timechain",
      techStack: [
        "Rust",
        "Substrate",
        "Docker",
        "Threshold Signature sceheme",
        "Solidity",
        "Libp2p"
      ],
      description:
        "Analog timechain node which is the heart of Analog network. Serves as relayer to multi chain communication with security of threshold signature scheme.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Analog-Labs/timechain/",
      },
    },
    {
      title: "Analog Chain Connectors",
      techStack: [
        "Rust",
        "Axum",
        "Futures",
        "Tokio",
        "Web3",
        "Subxt",
      ],
      description: "A rust based library which is the backbone of timechain. Rosetta based architecture that made possible to call multi chain transactions from single interface",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Analog-Labs/chain-connectors/",
      },
    },
    {
      title: "Analog Gmp (General mesage passing)",
      techStack: [
        "Solidity",
        "Foundry",
      ],
      description: "Analog smart contracts for evm chains. That help process analog's gmp messages and executes on the deployed chains.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Analog-Labs/analog-gmp/",
      },
    },
    {
      title: "Analog Timegraph",
      techStack: [
        "Rust",
        "GraphQL",
        "Subxt",
      ],
      description: "Analog's data warehouse for which helps indexing and quering of user data and smart contract triggers.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Analog-Labs/timegraph-sdk/",
      },
    },
    {
      title: "Piqsol",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "piqsol.com",
        href: "https://piqsol.com/",
      },
    },
    {
      title: "OCR",
      techStack: ["Python", "tesseract", "OpenCV"],
      description:
        "Made Multi language OCR models for programmers force pvt ltd. Which could read text from images with accuracy upto 99%.",
      logo: MonitoLogo,
    },
    {
      title: "Object Detector",
      techStack: ["Python", "YOLO Object detection"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
    },
    {
      title: "Fake card detector",
      techStack: ["Python", "OpenCV"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
    },
    {
      title: "KYSEK SML",
      techStack: ["C#", "Xamarin.forms", "Android", "IOS"],
      description:
        "Kysek sportsman log. Helps to manage outdoor journeys and also Manage Kysek Ice Chest",
      logo: Minimal,
      link: {
        label: "Kysek SML",
        href: "https://kysek.com/products/sml",
      },
    },
    {
      title: "Chips",
      techStack: ["C#", "Xamarin.forms", "Android", "IOS"],
      description:
        "Xamarin cross platform project to manage cargo ships by keeping information about packages in app so that their process can be streamlined in the app.",
      logo: Minimal,
      link: {
        label: "CHiPS",
        href: "https://csnainc.com/chips/",
      },
    },
    {
      title: "XVMS CMSR",
      techStack: ["C#", "WPF", "Xamarin.Android", "Android", "Desktop App"],
      description:
        "Content Management System. App supported for Android and Desktop designed to help organisations to create and manage interactable dynamic content for big screens for their customers.",
      logo: JarockiMeLogo,
    },
    {
      title: "Intelli Pass Screening System",
      techStack: ["C#", "WPF", "Xamarin.Android", "Android" ],
      description:
        "This is an intelligent screening system that also supports attendance with Covid-19 precaution features. During Covid-19 there was a dire need to have a system to prevent people from entering the organisation who were having fever or without masks.",
      logo: JarockiMeLogo,
    },
  ],
} as const;
