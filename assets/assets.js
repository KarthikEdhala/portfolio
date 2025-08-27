import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import cloud_icon from "./cloud_icon.png";
import api_icon from "./api_icon.png";
import ai_icon from "./ai_icon.png";
import work1 from "./work1.png";
import work2 from "./work2.png";
import work3 from "./work3.png";
import aws_associate from "./aws_associate.png";
import leetcode from "./leetcode.png";
import neetcode from "./neetcode.avif";
import aws from "./aws.webp";
import docker from "./docker.png";
import jenkins from "./jenkins.jpg";
import jira from "./jira.png";
import kubernetes from "./kubernetes.png";
import postman from "./postman.png";
import postgres from "./postgres.webp";
import devops from "./devops.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  cloud_icon,
  api_icon,
  ai_icon,
  work1,
  work2,
  work3,
  aws_associate,
  leetcode,
  neetcode,
  aws,
  postman,
  jira,
  jenkins,
  kubernetes,
  docker,
  postgres,
  devops,
};

export const workData = [
  {
    title: "BotNest Platform",
    description: "AI Chatbots",
    bgImage: "/work-1.png",
    url: "https://botnest.vercel.app/",
    gitUrl: "",
    technologies: [],
    status: "Completed",
  },
  {
    title: "AI Agent Tool",
    description: "Customer Response",
    bgImage: "/work-2.png",
    url: "https://ai-agent-gray.vercel.app/",
    gitUrl: "",
    technologies: [],
    status: "Completed",
  },
  {
    title: "Doc Q&A System",
    description: "PDF Q&A System",
    bgImage: "/work-3.png",
    url: "https://chat-with-pdf-challenge-gamma.vercel.app/",
    gitUrl: "",
    technologies: [],
    status: "Completed",
  },
  {
    title: "AI Email Assistant",
    description: "Chrome Extension",
    bgImage: "/work-4.png",
    url: "",
    gitUrl: "",
    technologies: [],
    status: "Completed",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Web Development",
    description:
      "I build secure and scalable web applications with modern frameworks.",
    link: "http://localhost:8080",
  },
  {
    icon: assets.cloud_icon,
    title: "Cloud-Native Solutions",
    description:
      "I deploy and optimize applications on AWS for reliability and scale.",
    link: "http://localhost:8080",
  },
  {
    icon: assets.api_icon,
    title: "API Development & Integration",
    description:
      "I create and integrate REST and GraphQL APIs for seamless systems.",
    link: "http://localhost:8080",
  },
  {
    icon: assets.ai_icon,
    title: "AI-Powered Applications",
    description:
      "I integrate AI tools like OpenAI to add automation and intelligence.",
    link: "http://localhost:8080",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Java, Python, TypeScript, C, SQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Masters in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 10 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.git,
  assets.aws,
  assets.docker,
  assets.kubernetes,
  assets.jenkins,
  assets.postman,
  assets.jira,
  assets.firebase,
  assets.mongodb,
  assets.postgres,
  assets.figma,
];

export const certsData = [
  {
    title: "AWS DevOps Engineer – Professional",
    description:
      "Advanced skills in continuous delivery, automation, monitoring, and resilient AWS deployments",
    date: "Issued Aug 2025",
    badge: "Certified",
    url: "https://www.credly.com/badges/6c330606-ebc3-45a0-87ab-ab0f492d2be0/linked_in_profile",
    bgImage: assets.devops.src,
  },
  {
    title: "AWS Developer Associate",
    description: "Cloud development & deployment expertise",
    date: "Issued Jun 2025",
    badge: "Certified",
    url: "https://www.credly.com/badges/6144d2ae-8a14-456f-b071-aac16e7d09a5/linked_in_profile",
    bgImage: assets.aws_associate.src,
  },
  {
    title: "LeetCode Profile",
    description: "50+ problems solved across all difficulty levels",
    date: "Active daily",
    badge: "Active",
    url: "https://leetcode.com/u/karthik_Edhala/",
    bgImage: assets.leetcode.src,
  },
  {
    title: "NeetCode Roadmap",
    description:
      "Structured roadmap for advanced DSA practice and problem-solving mastery",
    date: "2023 – Present",
    badge: "In Progress",
    url: "https://neetcode.io/roadmap",
    bgImage: assets.neetcode.src,
  },
];
