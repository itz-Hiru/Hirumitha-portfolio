import { FaBehanceSquare } from "react-icons/fa";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact
} from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import PersonalInfo from "../components/Cards/PersonalInfoCard.component";
import Skills from "../components/Cards/SkillsCard.component";

export const NAV_LINKS = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    path: "https://linkedin.com/in/hirumitha/",
    linkText: "Connect on LinkedIn",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    path: "https://github.com/itz-Hiru/",
    linkText: "Explore my GitHub",
  },
  {
    icon: FaBehanceSquare,
    name: "Behance",
    path: "https://behance.net/hirumitkuladew",
    linkText: "View Behance Portfolio",
  },
  {
    icon: FaDribbble,
    name: "Dribble",
    path: "https://dribbble.com/x_Hiru_xx",
    linkText: "Browse Dribbble Shots",
  },
];

export const ABOUT_TABS = [
  { label: "About", content: PersonalInfo },
  { label: "Skills", content: Skills },
];

export const SOCIAL_MEDIA = [
  {
    icon: FaLinkedin,
    path: "https://linkedin.com/in/hirumitha/",
  },
  {
    icon: FaGithub,
    path: "https://github.com/itz-Hiru/",
  },
  {
    icon: FaBehanceSquare,
    path: "https://behance.net/hirumitkuladew",
  },
  {
    icon: FaFacebook,
    path: "https://www.facebook.com/share/16ZKFbY7ao/",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/x_hiru23?igsh=Zmc4Y253MGFkdXNn",
  },
];

export const FRONTEND_SKILLS = [
  {
    icon: FaReact,
    name: "React",
    ability: 90,
  },
  {
    icon: RiNextjsFill,
    name: "NextJS",
    ability: 70,
  },
  {
    icon: RiJavascriptFill,
    name: "JavaScript",
    ability: 80,
  },
  {
    icon: RiTailwindCssFill,
    name: "TailwindCSS",
    ability: 100,
  },
];

export const BACKEND_SKILLS = [
  {
    icon: IoLogoNodejs,
    name: "NodeJS",
    ability: 85,
  },
  {
    icon: FaJava,
    name: "Java",
    ability: 80,
  },
  {
    icon: SiSpringboot,
    name: "SpringBoot",
    ability: 60,
  },
  {
    icon: FaPython,
    name: "Python",
    ability: 65,
  },
];
