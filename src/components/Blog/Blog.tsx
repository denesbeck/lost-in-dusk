import blogEntries from "./config/data";
import { BlogCard } from "./components";

const Blog = () => {
  return (
    <div className="h-screen">
      <div className="overflow-auto py-4 mt-[80px] max-h-[calc(100vh-170px)] lg:mt-[100px]">
        <div className="grid gap-12 justify-center px-10 [grid-template-columns:repeat(auto-fit,minmax(24rem,0))]">
          {blogEntries.map((entry) => {
            const Content = entry.content;
            return (
              <BlogCard
                key={entry.id}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                content={<Content />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
