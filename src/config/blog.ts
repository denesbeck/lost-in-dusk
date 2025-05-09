import { BlogEntry01, BlogEntry02 } from "@/blog-entries";
import { JSX } from "react";

interface BlogEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  content: () => JSX.Element;
}

const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: 1,
    title: "Migrating to Tekton",
    description:
      "This blog post is about my experience migrating from Travis CI to Tekton.",
    date: "2023-12-13",
    content: BlogEntry01,
  },
  {
    id: 2,
    title: "IBM Tech 2024 Conference",
    description: "Insights and takeaways from the IBM Tech 2024 conference.",
    date: "2024-03-22",
    content: BlogEntry02,
  },
];

export default BLOG_ENTRIES;
