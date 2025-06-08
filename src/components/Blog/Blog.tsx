import blogEntries from "./config/data";
import { BlogCard } from "./components";

const Blog = () => {
  return (
    <div className="h-screen">
      <div className="overflow-auto py-4 mt-[80px] max-h-[calc(100vh-170px)] lg:mt-[100px]">
        <div className="grid sm:gap-12 sm:justify-center sm:px-10 sm:[grid-template-columns:repeat(auto-fit,minmax(21rem,0))]">
          {blogEntries.map((entry) => {
            return (
              <BlogCard
                key={entry.id}
                id={entry.id}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                content={entry.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
