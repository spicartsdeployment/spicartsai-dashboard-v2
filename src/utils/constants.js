//import all constant data here
// import dashboardImg from '../assets/images/dashboard-img.jpg';
import voiceAIVideo from '../assets/videos/voiceai.mp4';
import homeImg from '../assets/images/home.png';
import logoImg from '../assets/images/logo-transparent.png';
import navAiLogo from '../assets/images/nav-ai-logo.png';
import navRoboLogo from '../assets/images/nav-robo-logo.png';
import navDevLogo from '../assets/images/nav-dev-logo.png';
import websiteAnimationPotrait from '../assets/videos/website_animation_potrait.mp4';
import homeContactSLogo from '../assets/images/home-contact-s-logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { LuCircleArrowUp } from "react-icons/lu";
import homeProducts from '../assets/images/home-products.png';
import product_tour from '../assets/images/product_tour.svg';
import home_page_ai from '../assets/videos/home_page_ai.gif';
// Services
import aiVideo from '../assets/videos/service_AI.mp4';
import serviceRobotics from '../assets/videos/service_robotics.mp4';
import servDevVideo from '../assets/videos/service_development.mp4';

// Services - AI
import aiInteractiveBot from '../assets/videos/ai_interactive_bot.mp4';
import contentCreation from '../assets/videos/content-creation-genai-1.gif'
import AIVoiceGeneration from '../assets/videos/ai-voice-generation-genai-2.gif'
import aiSpeechToText from '../assets/images/ai-speech-to-text.gif';
import aiTranslation from '../assets/images/ai-translation.gif';
import aiTextToSpeech from '../assets/images/ai-text-to-speech.gif';
import tailoredSolutions from '../assets/images/tailored-sol-genai-3.gif';
// Services - Development
import desktopDev from '../assets/images/desktop-dev.jpg';
import webDev from '../assets/images/web-dev.png';
import appDev from '../assets/images/app-dev.jpg';
import customDev from '../assets/images/custom-dev.jpg';

import infotainment from '../assets/images/infotainment.jpg';
import botHub from '../assets/images/bot-hub.webp';

// Profile images
import Founder from '../assets/images/profiles/prakash.jpeg';
import CoFounder from '../assets/images/profiles/venkat.jpeg';

import productManager from '../assets/images/profiles/sai.jpeg';
import researchNDev from '../assets/images/profiles/jagan.jpeg';
import fullStackPM from '../assets/images/profiles/anil.jpeg';

import leadFullStackDev from '../assets/images/profiles/kalyan.jpeg';
// import fSDataScientist from '../assets/images/profiles/chandu.jpeg';
import seniorDataScientist from '../assets/images/profiles/saklen.jpg';
// import leadJavaDev from '../assets/images/profiles/surya.jpeg';

import seniorCloudEng from '../assets/images/profiles/prem.jpeg';
import seniorDatabaseEng from '../assets/images/profiles/kalyanDB.jpeg';

import QAEngAnalyst from '../assets/images/profiles/anudeep.jpeg';

import salesEng from '../assets/images/profiles/pradeep.jpeg';
import seniorSalesEx from '../assets/images/profiles/sravan.jpeg';

import contentStrategist from '../assets/images/profiles/surya-c.jpeg';

import pavan from '../assets/images/profiles/pavan.jpeg';


//qunatum_images

import voice from '../assets/images/voice.png'
import aiagent from '../assets/images/Aiagent.png'
import financial from '../assets/images/financial.png'
import pattern from '../assets/images/pattern.png'



// Remove this
import productsBg from '../assets/images/products-bg.jpg';

import { FaBrain, FaMicrophone, FaRobot, FaCode, FaUserFriends, FaGlobe, FaRocket, FaShieldAlt, FaChevronRight } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";


export const ICONS = {
  ROBOT: FaRobot,
  upArrow: LuCircleArrowUp,
  HAMBURGER: RxHamburgerMenu,
  IoChevronDownOutline: IoChevronDownOutline, // For links ( Navbar, Footer )
  ChevronRight: FaChevronRight,
  circleCheck: AiOutlineCheckCircle,
};

export const IMAGES = {
  // DASHBOARD_IMG: dashboardImg,
  HOME_IMG: homeImg,
  LOGO: logoImg,
  NAV_AI_LOGO: navAiLogo,
  NAV_ROBO_LOGO: navRoboLogo,
  NAV_DEV_LOGO: navDevLogo,
  HOME_CONTACT_S_LOGO: homeContactSLogo,
  HOME_PRODUCTS: homeProducts,

  // Services - AI
  AI_SPEECH_TO_TEXT: aiSpeechToText,
  AI_TRANSLATION: aiTranslation,
  AI_TEXT_TO_SPEECH: aiTextToSpeech,
  PRODUCT_TOUR: product_tour,
  INFOTAINENT: infotainment,
  BOTHUB: botHub,

  // Services - Development
  DESKTOP_DEV: desktopDev,
  WEB_DEV: webDev,
  APP_DEV: appDev,
  CUSTOM_DEV: customDev,

  TAILORED_SOLUTIONS: tailoredSolutions,
};

// export videos
export const VIDEOS = {
  VOICE_AI: voiceAIVideo,
  WEBSITE_ANIMATION_POTRAIT: websiteAnimationPotrait,
  HOME_PAGE_AI: home_page_ai,

  // Services Robotics
  CONTENT_CREATION: contentCreation,
  AI_VOICE_GENERATION: AIVoiceGeneration,
  AI_ITERACTIVE_BOT: aiInteractiveBot
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1, // 1 second fade-in
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};


// Service Section Data ( LandingPage )
export const servicesData = [
  {
    icon: '🗣️',
    title: 'AI Voice Solutions & Conversational Intelligence',
    description: 'Creating human-like, expressive AI voices that transform how businesses communicate.',
    features: [
      'AI Voice Branding – Develop custom, signature AI voices tailored for your brand.',
      'AI-Powered Voice Dubbing – Realistic, multilingual dubbing for media, marketing & content.',
      'Conversational AI Assistants – Smart, natural interactions for customer engagement.'
    ]
  },
  {
    icon: '📄',
    title: 'Generative AI for Text & Content',
    description: 'Revolutionizing text creation with AI-driven automation and natural language generation.',
    features: [
      'AI-Powered Copywriting & Content Generation – Blogs, ads, and marketing material at scale.',
      'Automated AI Transcription & Summarization – Convert speech to text with accuracy.',
      'Custom NLP Solutions – AI-powered chatbots, document processing & intelligent insights.'
    ]
  },
  {
    icon: '🌐',
    title: 'AI-Enhanced Web & App Development',
    description: 'We build intelligent digital platforms powered by AI automation and voice integration.',
    features: [
      'Conversational AI for Websites & Apps – Seamless user interactions powered by AI.',
      'Smart UI/UX Optimization – AI-driven personalization & user experience enhancement.',
      'Voice-Enabled Interfaces – Hands-free, intuitive voice-controlled digital experiences.'
    ]
  },
  {
    icon: '🤖',
    title: 'Smart Automation & AI-Driven Systems',
    description: 'Bringing AI-powered efficiency to homes, industries, and digital ecosystems.',
    features: [
      'Voice-Controlled Smart Systems – AI-driven automation for homes & businesses.',
      'AI-Powered Process Automation – Intelligent workflows to reduce manual effort.',
      'Predictive AI & Smart Assistants – AI models that adapt, learn, and optimize operations.'
    ]
  }
];

// export const products = [
//   {
//     id: 1,
//     name: "Voice AI",
//     tagline: "Where Speech Becomes Power",
//     features: [
//       { icon: "🎤", text: "Speech-to-Text: Converts speech into accurate text in real-time." },
//       { icon: "🌍", text: "Text Translation: Breaks language barriers with context-aware translations." },
//       { icon: "🗣️", text: "Text-to-Speech: Turns text into expressive, lifelike speech." },
//       { icon: "🎙️", text: "Voice Cloning: Replicates voices with stunning accuracy." }
//     ],
//     link: "/products/ai"
//   },
//   {
//     id: 2,
//     name: "Generative AI & AI Agents",
//     tagline: "Powering the Future with Intelligence",
//     features: [
//       { icon: "🔍", text: "Understands Natural Speech – Speak freely, no robotic commands." },
//       { icon: "🤖", text: "AI-Driven Automation – Automates workflows and task execution." },
//       { icon: "🧠", text: "Generative AI Integration – AI-generated content and decision-making." },
//       { icon: "🌍", text: "Multilingual Support – Understands multiple languages and adapts to preferences." }
//     ],
//     link: "/products/generative-ai"
//   },
//   { id: 3, name: "Product 3", description: "This is Product 3" },
// ];

// Voice AI Services
export const products = [
  {
    title: "Speech to Text",
    description: "Imagine talking, and it just... gets typed. From voice notes to commands, our AI converts speech into crisp, accurate text even with regional accents and noisy environments.",
    features: ["Obstacle Avoidance", "Voice-controlled forms for customer service", "Meeting note automation for teams"],
    tagline: "Let your users talk, we’ll handle the typing",
    image: aiSpeechToText
  },
  {
    title: "Text Translation",
    description: "Talk local. Act global. Break language barriers in real-time with seamless translations that feel natural, not robotic.",
    features: ["E-commerce platforms serving global users", "Travel assistant apps with multilingual guides", "Video games with real-time localization"],
    tagline: "Speak once. Be heard everywhere",
    image: aiTranslation
  },
  {
    title: "Text to Speech",
    description: "Turn boring text into engaging voice that feels alive. Add tone, emotion, and expression—because flat narration is so yesterday.",
    features: ["Audiobooks with emotional storytelling", "Virtual assistants with a human touch", "EdTech platforms that speak with clarity"],
    tagline: "Words should talk, not just sit there",
    image: aiTextToSpeech
  },
  {
    title: "Speech to Speech",
    description: "Speak in your language, we’ll translate the emotion and tone into another. Global conversations without losing your vibe.",
    features: ["Multilingual customer support", "Real-time interviews across languages", "International conferences with native-sounding translation"],
    tagline: "Speak the way you feel across any language",
    image: aiTranslation
  },
  {
    title: "Voice Cloning & Dubbing",
    description: "Your voice, your brand everywhere. Clone voices with emotion and context, perfect for creators, brands, and dubbing studios.",
    features: ["Personalized assistants", "Content creators dubbing in multiple languages", "Voice branding in marketing"],
    tagline: "Be anywhere. Sound like you",
    image: aiTranslation
  }
];

// Generative AI Services
export const genAIServ = [
  {
    title: "Content Creation & Copywriting",
    description: "No more writer’s block. Our AI understands tone, brand voice, and audience—creating blogs, captions, emails, and more in seconds. even with regional accents and noisy environments.",
    features: ["Startups creating marketing content", "Agencies managing multiple brands", "E-commerce platforms generating SEO product descriptions"],
    tagline: "Let your content team breathe, AI's got this.",
    image: contentCreation
  },
  {
    title: "AI Voice Generation & Storytelling",
    description: "Create lifelike storytelling with AI-generated voices that adapt to tone, language, and even emotion. Make characters speak like real people, not robots.",
    features: ["Game developers creating character voiceovers", "Podcast creators automating multilingual episodes", "Educational content creators localizing lessons"],
    tagline: "One voice? A thousand voices? Why Choose?",
    image: AIVoiceGeneration
  },
  {
    title: "Image & Design Generation",
    description: "Turn your prompt into stunning visuals from product mockups to social posts and campaign graphics. All within seconds.",
    features: ["Creators building content packs", "Designers prototyping faster", "Marketing teams running A/B test visuals"],
    tagline: "Think it. Type it. See it.",
    image: aiTranslation
  },
  {
    title: "Video & Avatar Generation",
    description: "uto-generate personalized videos with avatars that speak your script in any language—ideal for scale without a production crew.",
    features: ["HR teams automating onboarding videos", "Influencers creating personalized video messages", "EdTech platforms teaching with dynamic avatars"],
    tagline: "Lights. Camera. AI.",
    image: aiTranslation
  },
];

// Services - Deveopment
export const developmentCards = [
  {
    id: 'web',
    title: 'Web Development',
    tagline: 'Websites That Don’t Just Look Good. They Work Brilliantly',
    description:
      'We design sleek, fast, and scalable websites that communicate your brand, connect with your users, and convert like magic. Whether it’s a landing page, portfolio, or complex platform—your web presence deserves to be powerful, responsive, and beautifully intuitive.',
    quote: '“Tech with style. Design with intention. Build that speaks.”',
    image: IMAGES.WEB_DEV,
    cta: [
      { label: '🔵 Build My Website', link: '#' },
      { label: 'Let’s Talk Design', link: '#' }
    ]
  },
  {
    id: 'app',
    title: 'App Development',
    tagline: 'Smart, Smooth, and Store-Ready Apps.',
    description:
      "From idea to app store, we design user-friendly, cross-platform mobile applications tailored to your audience and goals. Whether you're launching a product, digitizing operations, or enhancing customer experiences—we code it smart, secure, and scalable.",
    quote: '"Built for people. Tuned for performance. Tested for the future."',
    image: IMAGES.APP_DEV,
    cta: [
      { label: '🟢 Start My App Journey', link: '#' },
      { label: 'Request Demo', link: '#' }
    ]
  },
  {
    id: 'desktop',
    title: 'Desktop Application Development',
    tagline: 'Robust Desktop Apps. Built for Power, Performance & Precision.',
    description:
      'Whether you\'re looking to build powerful tools for enterprise use, offline-capable software, or performance-heavy applications—our desktop development services are tailored to your unique needs. We build secure, fast, and platform-optimized applications that work seamlessly across Windows, Mac, and Linux.',
    quote: '“Heavy-duty software, light-speed performance.”',
    highlights: [
      'Custom POS systems for retail',
      'Offline tools for healthcare & diagnostics',
      'Industrial monitoring software',
      'AI-integrated dashboards for internal use',
      'Voice-commanded PC apps (for accessibility or automation)'
    ],
    image: IMAGES.DESKTOP_DEV,
    cta: [
      { label: '🟢 Let’s Build Your App', link: '#' },
      { label: '🔵 Request a Demo', link: '#' }
    ]
  },
  {
    id: 'custom',
    title: 'Custom Development',
    tagline: 'Got Something Unique? We’ll Build It.',
    description:
      'Need something that doesn’t come out of the box? We specialize in crafting custom tech solutions — whether it’s internal dashboards, AI-powered tools, automation systems, or unique backend platforms. You share the challenge, we deliver the solution.',
    quote: '“No templates. Just tailored tech.”',
    // highlights: [
    //   'Custom POS systems for retail',
    //   'Offline tools for healthcare & diagnostics',
    //   'Industrial monitoring software',
    //   'AI-integrated dashboards for internal use',
    //   'Voice-commanded PC apps (for accessibility or automation)'
    // ],
    image: IMAGES.CUSTOM_DEV,
    cta: [
      { label: '🟢 Get a Custom Quote ', link: '#' },
      { label: '🔵 Share Your Idea', link: '#' }
    ]
  }
];

// Development - Features cards
export const devFeatures = [
  {
    title: "Designed to Delight, Built to Last",
    description:
      "We create digital experiences that go beyond “just working.” Stunning UI, stable backend, and seamless flow.",
  },
  {
    title: "Speed Isn’t Optional. It’s a Standard.",
    description:
      "Our devs obsess over performance—from load times to transitions. Fast is the default.",
  },
  {
    title: "One Code. All Devices.",
    description:
      "Go cross-platform with a single codebase. Your app, everywhere your users are.",
  },
  {
    title: "Your Idea. Our Engineering.",
    description:
      "You bring the vision. We bring the team, tools, and experience to build it from scratch.",
  },
  {
    title: "Security. Stability. Scale.",
    description:
      "Peace of mind comes built-in. Our projects are hardened, scalable, and enterprise-ready.",
  },
  {
    title: "Where Function Meets Aesthetics",
    description:
      "Our websites and apps aren’t just smart—they’re beautiful, branded, and user-loved.",
  },
  {
    title: "Launch. Iterate. Evolve.",
    description:
      "Our agile process helps you start small and scale fast. We build for today and evolve for tomorrow.",
  },
];

// Remove this section
export const categories = [
  {
    id: 1,
    name: "AI",
    icon: "🤖",
    description:
      "Empowering businesses with cutting-edge AI solutions, including Voice AI and Generative AI. Revolutionize communication, creativity, and automation.",
    link: "/ai"
  },
  {
    id: 2,
    name: "Robotics",
    icon: "🔧",
    description:
      "Building the future of automation with autonomous robots and intelligent systems. Enhance productivity and efficiency in dynamic environments.",
    link: "/robotics"
  },
  {
    id: 3,
    name: "Development",
    icon: "💻",
    description:
      "Delivering scalable web and app development solutions. From responsive designs to secure applications, we craft intuitive digital experiences.",
    link: "/development"
  }
];

//Main services page data
export const contentBlocks = [
  {
    title: "AI Services",
    description: "Leverage the power of Artificial Intelligence to transform how your business operates. From machine learning models to natural language processing and computer vision, our AI solutions enable smarter automation, faster decision-making, and deeper data-driven insights.",
    videoUrl: aiVideo, // Introduction to Artificial Intelligence and Azure AI Services
    path: "ai",
  },
  {
    title: "Robotics & Automation",
    description: "Reimagine efficiency with intelligent robotics and end-to-end automation. We design and deploy adaptive robotic systems that boost productivity, reduce human error, and optimize workflows — across manufacturing, logistics, healthcare, and more.",
    videoUrl: serviceRobotics, // What is Robotics and Automation?
    path: "robotics",
  },
  {
    title: "Web & App Development",
    description: "Create future-ready digital experiences with our custom development services. We build responsive websites and scalable mobile apps using modern frameworks, focusing on performance, security, and user-centric design — tailored to your business goals.",
    videoUrl: servDevVideo, // Learn Full Stack Web Development From Scratch
    path: "development",
  },
];

//Why Choose Us Section Data
export const whyCards = [
  {
    title: "Human-Like AI Voice",
    description: "Our AI speaks naturally, with real emotions and expressive tones.",
  },
  {
    title: "Smart Automation",
    description: "Voice-controlled systems that make everyday interactions effortless.",
  },
  {
    title: "Multilingual AI",
    description: "Breaking language barriers with seamless, intelligent translations.",
  },
  {
    title: "Conversational Intelligence",
    description: "AI that doesn't just hear you—it truly understands and responds.",
  },
];

//Why it feels Diff Section Data
export const whyCardsDiff = [
  {
    description: "Truly conversational in local languages.",
  },
  {
    description: "Detects emotion and responds accordingly.",
  },
  {
    description: "Can be customized to your devices and setup.",
  },
  {
    description: "Runs on voice-first design that feels intuitive.",
  },
];

// How We Work Section Data
export const howWeWork = [
  {
    description: "Start with your idea or problem.",
  },
  {
    description: "Collaborate on a functional prototype.",
  },
  {
    description: "Build custom hardware + AI layer.",
  },
  {
    description: "End-to-end support from concept to deployment.",
  },
];

// Who We Work With Section Data
export const whoWeWork = [
  {
    description: "Smart city initiatives.",
  },
  {
    description: "Schools and universities.",
  },
  {
    description: "AgriTech and warehouse innovators.",
  },
  {
    description: "R&D labs looking to test new tech.",
  },
];


export const services = [
  { id: 1, name: "Service 1", description: "This is Service 1" },
  { id: 2, name: "Service 2", description: "This is Service 2" },
  { id: 3, name: "Service 3", description: "This is Service 3" },
];

export const contentData = [
  {
    "tab": "voice-ai",
    "text": "We build AI that listens, understands, and acts — in your language, your way. From voice agents to modular tools, we make smart feel simple.",
    "video": voiceAIVideo,
    "boxes": [
      {
        "header": "Emotionally Expressive AI Voices",
        "description": "AI that speaks with real emotions. Our voices are dynamic, natural, and engaging, delivering human-like tones that resonate and connect.",
        "third_section": {
          "icon": "icon1.png",
          "name": "Name 1_1"
        }
      },
      {
        "header": "Multilingual AI Communication",
        "description": "Seamless conversations in any language. Our AI understands context, intent, and emotion, ensuring fluent, native-level interactions worldwide.",
        "third_section": {
          "icon": "icon2.png",
          "name": "Name 1_2"
        }
      },
      // {
      //   "header": "Conversational AI & Smart Assistants",
      //   "description": "AI that listens, understands, and responds. From automated support to voice-controlled systems, our assistants deliver fast, intelligent, and engaging interactions.",
      //   "third_section": {
      //     "icon": "icon3.png",
      //     "name": "Name 1_3"
      //   }
      // }
      {
        "header": "Quantum Machine Learning",
        "description": "We believe Quantum Machine Learning is not just the future — it’s the path to solving problems once thought impossible. Our R&D in this space is focused on early experimentation, education, and industry collaboration to unlock this potential for real-world impact.",
        "third_section": {
          "icon": "icon2.png",
          "name": "Name 1_2"
        }
      }
    ]
  },
  {
    "tab": "robotics",
    "text": "Smart bots, real impact. We blend AI and machines to create assistants, automation, and voice-controlled systems that work for you.",
    "video": voiceAIVideo,
    "boxes": [
      {
        "header": "AI for Automotive & Smart Devices",
        "description": "Enhancing cars and smart devices with intelligent, voice-driven experiences—seamless, hands-free, and futuristic.",
        "third_section": {
          "icon": "icon1.png",
          "name": "Name 2_1"
        }
      },
      {
        "header": "Advanced Home Automation",
        "description": "Redefining smart living with AI-powered automation—control everything with just your voice.",
        "third_section": {
          "icon": "icon2.png",
          "name": "Name 2_2"
        }
      },
      {
        "header": "AI-Powered Intelligent Automation",
        "description": "Supercharging industries with AI-driven robotics and automation—smarter, faster, and more efficient than ever.",
        "third_section": {
          "icon": "icon3.png",
          "name": "Name 2_3"
        }
      }
    ]
  },
  {
    "tab": "website-app-development",
    "text": "From apps to full-scale systems, we design and build clean, scalable solutions — tailored for users, powered by purpose.",
    "video": home_page_ai,
    "boxes": [
      {
        "header": "Smart AI-Driven Websites",
        "description": "High-performance, visually stunning websites with AI-powered personalization and automation.",
        "third_section": {
          "icon": "icon1.png",
          "name": "Name 3_1"
        }
      },
      {
        "header": "Intelligent App Development",
        "description": "Fast, scalable, and intuitive apps designed for seamless user experiences and AI-driven interactions.",
        "third_section": {
          "icon": "icon2.png",
          "name": "Name 3_2"
        }
      },
      {
        "header": "Custom Digital Ecosystems",
        "description": "End-to-end web & app solutions that blend innovation, performance, and AI intelligence to elevate your business.",
        "third_section": {
          "icon": "icon3.png",
          "name": "Name 3_3"
        }
      }
    ]
  }
];

// Development - Features cards
export const cardStackData = [
  {
    id: 1,
    title: 'Card Title One',
    content: 'This is the first card content.'
  },
  {
    id: 2,
    title: 'Card Title Two',
    content: 'Second card content goes here.'
  },
  {
    id: 3,
    title: 'Card Title Two',
    content: 'Second card content goes here.'
  },
  {
    id: 4,
    title: 'Card Title Two',
    content: 'Second card content goes here.'
  }
];

// Team Section Data
export const teamMembers = [
  { name: "Surya", role: "Founder, AI & Robotics Architect", quote: "AI is the bridge between imagination and reality." },
  { name: "Sai Kumar", role: "AI Voice Technology & Generative AI Specialist", quote: "Voice AI is about emotions and expressions." },
  { name: "Kalyan", role: "Data Engineering & AI Infrastructure Expert", quote: "A strong AI system needs robust data infrastructure." },
  { name: "Jagan", role: "Mentor & Research Head", quote: "AI research must integrate into real-world applications." },
  { name: "Saklen", role: "NLP & Large Language Models Expert", quote: "The future of AI lies in deeper language understanding." },
  { name: "Chandu", role: "AI Developer & Data Scientist", quote: "Real-world AI applications are where the magic happens." },
];
// Team Section Data
export const leadershipData = [
  {
    name: "Surya Prakash",
    role: "Founder & CEO",
    description: "Visionary behind SPicArts’ mission to democratize AI through voice-first innovation. Surya leads with a passion for building accessible, emotionally intelligent AI systems that serve real-world needs.",
    image: Founder
  },
  {
    name: "Venkat Ramana",
    role: "Co-Founder & Managing Director",
    description: "The strategic anchor of SPicArts. Venkat drives operational execution, client partnerships, and long-term sustainability, aligning every initiative with the company’s mission of meaningful tech impact.",
    image: CoFounder
  }
];

export const executiveTeamData = [
  {
    name: "Sai",
    role: "Product Engineering Manager",
    description: "Architect of SPicArts' core voice AI systems. Sai transforms research into reality, designing technologies that give machines the ability to understand, emote, and respond—just like humans.",
    image: productManager
  },
  {
    name: "Jagan",
    role: "Principal Research Engineer",
    description: "Leading our exploration into intelligent automation and speech understanding. Jagan ensures SPicArts remains at the frontier of applied AI innovation.",
    image: researchNDev
  },
  {
    name: "Anil",
    role: "Software Engineering Manager",
    description: "Bridging vision with execution, Anil manages the end-to-end delivery of AI-powered apps that integrate voice interaction, web accessibility, and automation.",
    image: fullStackPM
  },
  {
    name: "Kalyan",
    role: "Site Reliability Engineer",
    description: "Responsible for building intelligent user interfaces and scalable backend systems. Kalyan ensures SPicArts apps are smooth, secure, and future-ready.",
    image: leadFullStackDev
  },
  // {
  //   name: "Chandu",
  //   role: "Full Stack Data Scientist",
  //   description: "Chandu bridges data science with engineering, crafting end-to-end AI pipelines that drive our voice agents, automation engines, and decision systems. He ensures our products are not just smart—but deeply data-informed.",
  //   image: fSDataScientist
  // },
  {
    name: "Saklen",
    role: "Principal Data Scientist",
    description: "An NLP and LLM expert, Saklen leads the design of intelligent systems that understand language, extract intent, and personalize voice interactions. His work powers the emotional and contextual intelligence behind SPicArts' voice technologies.",
    image: seniorDataScientist
  },
  // {
  //   name: "Surya",
  //   role: "Lead Java Developer",
  //   description: "Driving the development of robust, enterprise-grade systems that align with our mission to embed intelligence into every interaction.",
  //   image: leadJavaDev
  // },
  {
    name: "Prem",
    role: "Principal Cloud Engineer",
    description: "Orchestrating the cloud infrastructure behind every voice interaction. Prem ensures SPicArts' systems are scalable, always-on, and optimized for voice-first performance.",
    image: seniorCloudEng
  },
  {
    name: "Kalyan",
    role: "Senior Database Engineer",
    description: "Designing and optimizing data architectures that fuel our generative AI engines. Kalyan ensures the integrity, security, and intelligence of data flows.",
    image: seniorDatabaseEng
  },
  {
    name: "Anudeep",
    role: "Quality & Delivery Engineer",
    description: "Championing reliability and user trust, Anudeep aligns our AI experiences with SPicArts’ promise of delivering intuitive, error-free, and emotionally aware interactions.",
    image: QAEngAnalyst
  },
  {
    name: "Pradeep",
    role: "Sales Engineer",
    description: "Translating SPicArts’ advanced voice technology into real-world value for clients. Pradeep aligns technical solutions with business challenges to deliver high-impact deployments.",
    image: salesEng
  },
  {
    name: "Sravan",
    role: "Senior Sales Executive",
    description: "Expanding the reach of SPicArts by connecting visionary AI solutions with forward-thinking businesses. Sravan drives adoption through strategic engagement.",
    image: seniorSalesEx
  },
  {
    name: "Surya",
    role: "Content Specialist",
    description: "Surya drives business growth with a client-first approach. His strategic outreach and relationship-building skills help expand SPicArts' presence across industries.",
    image: contentStrategist
  },
  {
    name: "Pavan",
    role: "Operations Specialist",
    description: "Pavan ensures our internal workflows are seamless and agile.",
    image: pavan
  }
];


export const expertiseData = [
  // { name: "Generative AI", icon: <FaBrain className="expertise-icon" /> },
  // { name: "Voice AI", icon: <FaMicrophone className="expertise-icon" /> },
  // { name: "IoT & Robotics", icon: <FaRobot className="expertise-icon" /> },
  // { name: "End-to-End Development", icon: <FaCode className="expertise-icon" /> },
  // { name: "Generative AI", icon: <FaBrain className="expertise-icon" /> },
  // { name: "Voice AI", icon: <FaMicrophone className="expertise-icon" /> },
  // { name: "IoT & Robotics", icon: <FaRobot className="expertise-icon" /> },
  // { name: "End-to-End Development", icon: <FaCode className="expertise-icon" /> },
];

export const missionData = [
  // { text: "Making AI more human-friendly", icon: <FaUserFriends className="mission-icon" /> },
  // { text: "Delivering real-world impact", icon: <FaGlobe className="mission-icon" /> },
  // { text: "Pushing AI innovation beyond limits", icon: <FaRocket className="mission-icon" /> },
  // { text: "Ensuring AI is secure & responsible", icon: <FaShieldAlt className="mission-icon" /> },
];

// Blog Data

export const trendingTopics = [
  {
    title: "Perplexity AI's Integration with Motorola Razr",
    description: "Discover how Perplexity AI is set to revolutionize mobile AI assistants with its upcoming inclusion in Motorola's Razr series.",
    link: "https://www.theverge.com/news/650585/perplexity-ai-samsung-motorola-razr-assistant",
  },
  {
    title: "Anthropic's Claude AI Introduces Voice Mode",
    description: "Learn about the new voice-enabled feature in Claude AI, offering users a more interactive experience.",
    link: "https://www.theverge.com/news/649175/anthropic-claude-ai-voice-mode-report",
  },
  {
    title: "Amazon's Nova Sonic Sets New Standards",
    description: "Read about Amazon's latest generative AI voice model, Nova Sonic, designed for real-time, natural conversations.",
    link: "https://theaiinsider.tech/2025/04/09/nova-sonic-from-amazon-marks-a-new-era-in-ai-voice-technology/",
  },
  {
    title: "AI Voiceovers Transforming Media",
    description: "Understand how synthetic voices are reshaping media and journalism, offering new possibilities for content creation.",
    link: "https://spacecoastdaily.com/2025/04/the-future-of-ai-voiceovers-how-synthetic-voices-are-transforming-media-and-journalism/",
  },
  {
    title: "AI Dubbing Tools for 2025",
    description: "A comprehensive review of the top AI dubbing tools enhancing video localization and accessibility.",
    link: "https://www.toolify.ai/ai-news/ai-voice-dubbing-tools-a-comprehensive-2025-review-3329059",
  },
];

export const featuredArticles = [
  "The Role of Generative AI in Content Creation",
  "Advancements in Edge AI for Smarter Automation",
  "AI-Powered Infotainment: Transforming User Experience",
  "Multilingual Voice AI: Bridging Language Gaps",
  "AI-Driven Home Automation: Creating Intelligent Living Spaces",
];


// Request Demo options
export const serviceOptions = [
  "Speech to Text",
  "Text to Speech",
  "Translation",
  "Speech to Speech",
  "Live Speech Translation",
  "Website Development",
  "App Development",
  "Gen AI, LLM's",
  "Voice Agent API",
  "Others",
];

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


export const quantum_content = [
  {
    img: voice,
    desc: "Quantum-enhanced Voice Recognition & Natural Language Processing"
  },
  {
    img: aiagent,
    desc: "Advanced AI Agents with quantum decision-making models"
  },
  {
    img: pattern,
    desc: "Pattern Recognition in complex biological and medical data"
  },
  {
    img: financial,
    desc: "Accelerated financial forecasting and cryptographic analysis"
  },





]

export const quantum_Images = {
  aiagent, voice
}

export const Quantum = [];