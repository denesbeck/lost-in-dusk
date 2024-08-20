import blogEntries from "../data/blog-entries.json";
import { BlogCard } from "components";

const Blog = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 px-10">
      {blogEntries.map((entry: any) => (
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
