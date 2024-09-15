import blogEntries from "@/config/data/blog-entries";
import { BlogCard } from "@/components";
import { Wrap } from "@chakra-ui/react";

const Blog = () => {
  return (
    <div className="h-screen">
      <div className="mt-[70px] max-h-[calc(100vh-150px)] overflow-auto py-4">
        <Wrap
          justify={"center"}
          spacing={"3rem"}
          className="px-10 h-full lg:pt-12"
        >
          {blogEntries.map((entry) => {
            const Content = entry.content;
            return (
              <BlogCard
                key={entry.id}
                id={entry.id}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                content={<Content />}
              />
            );
          })}
        </Wrap>
      </div>
    </div>
  );
};

export default Blog;
