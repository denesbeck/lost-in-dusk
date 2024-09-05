import blogEntries from "@/config/data/blog-entries";
import { BlogCard } from "@/components";
import { Wrap } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Wrap justify={"center"} spacing={"3rem"} px={10} pt={"8rem"} h={"100vh"}>
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
  );
};

export default Blog;
