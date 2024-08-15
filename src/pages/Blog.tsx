import blogEntries from "../data/blog-entries.json";
import { BlogEntryCard } from "components";

const Blog = () => {
  return (
    <div className="flex flex-wrap gap-20 justify-center px-10">
      {blogEntries.map((entry: any) => (
        <BlogEntryCard
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
