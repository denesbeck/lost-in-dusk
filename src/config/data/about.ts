import { aws_dev, terraform, ibm_dev } from "@/assets/certificates";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

export const INFO = {
  Name: "Denes Beck",
  Location: "Budapest, Hungary",
  Company: "IBM",
  Role: "DevOps Engineer",
};

export const CONNECTIONS = [
  {
    url: "https://github.com/denes-beck",
    icon: FaGithub,
  },
  {
    url: "https://www.linkedin.com/in/denesbeck",
    icon: FaLinkedin,
  },
  {
    url: "https://www.credly.com/users/denesbeck",
    icon: SiCredly,
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
    size: 110,
    img: aws_dev,
    alt: "awsDeveloperAssociate",
  },
  {
    url: "https://www.credly.com/badges/91d294a8-8f7d-4f5a-80c1-071fa0bf2be6/public_url",
    size: 110,
    img: terraform,
    alt: "terraform",
  },
  {
    url: "https://www.credly.com/badges/d991722d-3d60-4d76-9e62-49a5677b25e3/public_url",
    size: 100,
    img: ibm_dev,
    alt: "ibmDeveloper",
  },
];
