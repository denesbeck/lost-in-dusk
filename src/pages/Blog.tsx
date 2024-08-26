import blogEntries from "@/config/data/blog-entries.json";
import { BlogEntry } from "@/interfaces/blog";
import { BlogCard } from "@/components";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "LostInDusk | Blog";
  }, []);

  return (
    <div className="flex flex-wrap gap-20 justify-center px-10 mt-10">
      {blogEntries.map((entry: BlogEntry) => (
        <BlogCard
          key={entry.id}
          id={entry.id}
          title={entry.title}
          description={entry.description}
          date={entry.date}
        />
      ))}
    </div>
  );
};

export default Blog;
