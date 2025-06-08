import { BlogEntry } from "../interfaces/blog";
import migratingToTekton from "../blog-entries/migrating-to-tekton.md?url";
import ibmTech2024Conference from "../blog-entries/ibm-tech-2024-conference.md?url";
import lambdaDeployments from "../blog-entries/lambda-deployments.md?url";

const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: 3,
    title: "Lambda Deployments",
    description:
      "Automating AWS Lambda and Layer Deployments with GitHub Actions",
    date: "2025-06-07",
    tags: ["aws", "lambda", "cicd", "github-actions"],
    content: lambdaDeployments,
  },
  {
    id: 2,
    title: "IBM Tech 2024 Conference",
    description: "Insights and takeaways from the IBM Tech 2024 conference.",
    date: "2024-03-22",
    tags: ["ibm", "red-hat", "openshift", "ansible", "security", "watsonx"],
    content: ibmTech2024Conference,
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
  },
];

export default BLOG_ENTRIES;
