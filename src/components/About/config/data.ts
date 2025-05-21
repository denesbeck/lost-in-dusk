import { aws_dev, terraform } from "@/assets/certificates";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCredly,
  SiTypescript,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import {
  FaGithub,
  FaAws,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaMapMarkerAlt,
  FaBuilding,
  FaBriefcase,
  FaLinkedin,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi2";

export const INFO = {
  Name: "Denes B.",
  Location: "Budapest, Hungary",
  Company: "SEON",
  Role: "Software Engineer",
};

export const INFO_ICONS = {
  Name: HiIdentification,
  Location: FaMapMarkerAlt,
  Company: FaBuilding,
  Role: FaBriefcase,
};

export const CONNECTIONS = [
  {
    url: "https://github.com/denesbeck",
    icon: FaGithub,
  },
  {
    url: "https://www.credly.com/users/denesbeck",
    icon: SiCredly,
  },
  {
    url: "https://www.linkedin.com/in/denesbeck",
    icon: FaLinkedin,
  },
];

export type Certificate = {
  url: string;
  size: number;
  img: string;
  alt: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    url: "https://www.credly.com/badges/b4bf4117-6a90-49eb-baee-e382447b72c2/public_url",
    size: 105,
    img: aws_dev,
    alt: "awsDeveloperAssociate",
  },
  {
    url: "https://www.credly.com/badges/91d294a8-8f7d-4f5a-80c1-071fa0bf2be6/public_url",
    size: 105,
    img: terraform,
    alt: "terraform",
  },
];

export const SKILLS = [
  {
    name: "Next.js",
    icon: RiNextjsFill,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Golang",
    icon: FaGolang,
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    name: "Terraform",
    icon: SiTerraform,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
];

export const BIO =
  "🚀 I'm a full-stack software engineer with a strong focus on creating scalable, efficient, and maintainable applications using modern frameworks and best practices.";
