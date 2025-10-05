import { BlogEntry } from "../interfaces/blog";
import migratingToTekton from "../blog-entries/migrating-to-tekton.md?url";
import ibmTech2024Conference from "../blog-entries/ibm-tech-2024-conference.md?url";
import lambdaDeployments from "../blog-entries/lambda-deployments.md?url";
import buildingMyHomeServerP1 from "../blog-entries/building-my-home-server-p1.md?url";
import buildingMyHomeServerP2 from "../blog-entries/building-my-home-server-p2.md?url";
import buildHomeServer from "@/assets/blog/building_home_server.png";
import lambdaDeploy from "@/assets/blog/lambda_deploy.png";
import tektonCicd from "@/assets/blog/tekton_cicd.png";
import techConference from "@/assets/blog/tech_conference.png";

const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: 5,
    title: "Building my home server",
    description: "Part 2: SMB with Samba",
    date: "2025-10-03",
    tags: ["linux", "ubuntu", "smb", "samba"],
    content: buildingMyHomeServerP2,
    cover: { image: buildHomeServer, alt: "build_home_server" },
  },
  {
    id: 4,
    title: "Building my home server",
    description: "Part 1: Starting and connecting to the server",
    date: "2025-10-03",
    tags: ["linux", "ubuntu", "ssh", "wifi", "netplan", "security", "ufw"],
    content: buildingMyHomeServerP1,
    cover: { image: buildHomeServer, alt: "build_home_server" },
  },
  {
    id: 3,
    title: "Lambda Deployments",
    description:
      "Automating AWS Lambda and Layer Deployments with GitHub Actions",
    date: "2025-06-07",
    tags: ["aws", "lambda", "cicd", "github-actions"],
    content: lambdaDeployments,
    cover: { image: lambdaDeploy, alt: "lambda_deploy" },
  },
  {
    id: 2,
    title: "IBM Tech 2024 Conference",
    description: "Insights and takeaways from the IBM Tech 2024 conference.",
    date: "2024-03-22",
    tags: ["ibm", "red-hat", "openshift", "ansible", "security", "watsonx"],
    content: ibmTech2024Conference,
    cover: { image: techConference, alt: "tech_conference" },
  },
  {
    id: 1,
    title: "Migrating to Tekton",
    description:
      "This blog post is about my experience migrating from Travis CI to Tekton.",
    date: "2023-12-13",
    tags: [
      "cicd",
      "tekton",
      "ruby-on-rails",
      "travis-ci",
      "kubernetes",
      "docker",
    ],
    content: migratingToTekton,
    cover: { image: tektonCicd, alt: "tekton_cicd" },
  },
];

export default BLOG_ENTRIES;
