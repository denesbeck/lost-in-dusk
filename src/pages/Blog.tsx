import blogEntries from "@/config/data/blog-entries";
import { BlogCard } from "@/components";
import { Wrap } from "@chakra-ui/react";

const Blog = () => {
  return (
    <div className="h-screen">
      <div className="mt-[80px] max-h-[calc(100vh-170px)] overflow-auto py-4 lg:mt-[100px]">
        <Wrap justify={"center"} spacing={"3rem"} className="h-full px-10">
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
