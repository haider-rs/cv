import {
  ClevertechLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haider Ali",
  initials: "HA",
  location: "Lahore, Pakistan",
  timezone: "(UTC+5)",
  locationLink: "https://www.google.com/maps/place/Lahore",
  about:
    "Blockchain Developer",
  summary:
    "With a total of 6 years of experience in software development, I have spent 3+ years in blockchain technology, Mostly working with Rust and Solidity. My main focus have been around cross chain communication (GMP, CCTP), between EVM and Non-EVM chains, EVM Smart contract development and building blockchain node using polkadot-sdk and offchain workers. I also have experience working with Python (AI) and C#. In my free time I like to learn new technologies and play chess.",
  achievements: [
    {
      text: "Top contributor at Analog's multi-chain node.",
      link: "https://github.com/Analog-Labs/timechain"
    },
    {
      text: "Built secure cross-chain communication infrastructure.",
      link: "https://github.com/Analog-Labs/timechain"
    },
    {
      text: "Led a team to develop a cross-chain swap protocol.",
      link: "https://zenswap.io"
    },
    {
      text: "Developed and deployed RWA tokenization smart contracts.",
      link: "https://firestarter.fun"
    },
    {
      text: "Built the Solana NFT fractionalization backbone.",
      link: "https://piqsol.com"
    },
    {
      text: "Contributed to building the server infrastructure.",
      link: "https://basebox.ai"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        "Rust (3+ years)",
        "Substrate (3+ years)",
        "Solidity (2+ years)",
        "Python (1+ year)",
        "C# (2+ years)",
      ]
    },
    {
      category: "Development",
      items: [
        "Forge", "Anvil", "Cast", "Cargo", "Tokio", "Axum", "libp2p", "Subxt"
      ]
    },
    {
      category: "Monitoring",
      items: [
        "CI/CD Codecov", "Grafana", "Github actions"
      ]
    },
    {
      category: "Security analysis",
      items: [
        "Slither", "Aderyn", "Fuzz", "Stateful Fuzzing"
      ]
    },
    {
      category: "DevOps",
      items: [
        "Docker", "Scripts (Bash, Foundry, Rust)"
      ]
    }
  ],
  avatarUrl: undefined,
  personalWebsiteUrl: "",
  contact: {
    email: "haiderali.tech_786@outlook.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/haider-rs",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haider-rs/",
        icon: LinkedInIcon,
      },
      {
        name: "Telegram",
        url: "https://rusty_haider.t.me",
        icon: TelegramIcon,
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
        "My main focus in Analog has been their timechain node built on polkadot-sdk for their cross chain gmp message protocol. Also did work on production level secure solidity smart contracts.",
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
        "Started my blockchain journey with nft marketplace in Solana. Built Solana's fractional nft platform i.e. piqsol.com using metaplex contracts.",
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
  projects: [
    {
      title: "Firestarter",
      techStack: [
        "Solidity", "OpenZeppelin", "Beacon Proxy", "foundry", "uniswap v2"
      ],
      description:
        "RWA marketplace having where users can create their own assets and trade them. It runs two AMM models, bonding curve and uniswap v2 forked contracts.",
      logo: ParabolLogo,
      link: {
        label: "Zenswap",
        href: "https://firestarter.fun/",
      },
    },
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
      title: "Zenswap",
      techStack: [
        "Solidity", "CCTP", "Uniswap", "Rust"
      ],
      description:
        "Cross chain token transfer protocol based on Circle CCTP token transfer.",
      logo: ParabolLogo,
      link: {
        label: "Zenswap",
        href: "zenswap.io",
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
      title: "Basebox.ai",
      techStack: [
        "Rust",
        "GraphQL",
        "Keycloak",
        "Postgres",
        "OpenAI",
      ],
      description: "Basebox AI is a platform used by organisations to provide AI to their employees keeping their data safe. I worked on building their server infrastructure using rust axum framework. Also worked on integrating keycloak for authentication and authorisation.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Analog-Labs/timegraph-sdk/",
      },
    },
    {
      title: "Piqsol",
      techStack: ["TypeScript", "Solana", "Metaplex"],
      description:
        "Solana's first fractional NFT marketplace. Where users can create part of their NFT's and trade them. Built using metaplex contracts.",
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
        "Trained custom object detection model using YOLO. Which could detect multiple objects from images and videos for their OCR pipeline.",
      logo: MonitoLogo,
    },
    {
      title: "Fake card detector",
      techStack: ["Python", "OpenCV"],
      description:
        "Trained a model to detect fake/modified id cards. Used image processing and computer vision techniques to achieve the goal.",
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
      techStack: ["C#", "WPF", "Xamarin.Android", "Android"],
      description:
        "This is an intelligent screening system that also supports attendance with Covid-19 precaution features. During Covid-19 there was a dire need to have a system to prevent people from entering the organisation who were having fever or without masks.",
      logo: JarockiMeLogo,
    },
  ],
} as const;
