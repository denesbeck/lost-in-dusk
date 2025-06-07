import { BlogEntry01, BlogEntry02 } from "../blogEntries";
import MarkdownPage from "../components/MarkdownPage";
import { BlogEntry } from "../interfaces/blog";
import lambdaDeployments from "../blogEntries/lambda-deployments.md?url";

const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: 1,
    title: "Migrating to Tekton",
    description:
      "This blog post is about my experience migrating from Travis CI to Tekton.",
    date: "2023-12-13",
    content: <BlogEntry01 />,
  },
  {
    id: 2,
    title: "IBM Tech 2024 Conference",
    description: "Insights and takeaways from the IBM Tech 2024 conference.",
    date: "2024-03-22",
    content: <BlogEntry02 />,
  },
  {
    id: 3,
    title: "Lambda Deployments",
    description:
      "Automating AWS Lambda and Layer Deployments with GitHub Actions",
    date: "2025-06-07",
    content: <MarkdownPage markdownFile={lambdaDeployments} />,
  },
];

export default BLOG_ENTRIES;
