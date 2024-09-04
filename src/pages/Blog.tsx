import blogEntries from "@/config/data/blog-entries.json";
import { BlogEntry } from "@/interfaces/blog";
import { BlogCard } from "@/components";
import { Wrap } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Wrap justify={"center"} spacing={"3rem"} px={10} pt={"8rem"} h={"100vh"}>
      {blogEntries.map((entry: BlogEntry) => (
        <BlogCard
          key={entry.id}
          id={entry.id}
          title={entry.title}
          description={entry.description}
          date={entry.date}
        />
      ))}
    </Wrap>
  );
};

export default Blog;
