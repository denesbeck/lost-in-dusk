import blogEntries from "./config/data";
import { BlogCard, FilterTags, NoRecords } from "./components";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const tags = searchParams.getAll("tag");

  const filteredEntries = blogEntries.filter((entry) =>
    tags.every((tag) => entry.tags.includes(tag)),
  );

  const entries = tags.length > 0 ? filteredEntries : blogEntries;
  return (
    <div className="h-screen">
      <div className="mt-[80px]">
        <FilterTags />
        <div className="overflow-auto py-4 max-h-[calc(100vh-250px)]">
          {entries.length === 0 ? (
            <NoRecords />
          ) : (
            <div className="grid sm:gap-12 sm:justify-center sm:px-10 sm:[grid-template-columns:repeat(auto-fit,minmax(21rem,0))]">
              {entries.map((entry) => (
                <BlogCard
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  description={entry.description}
                  date={entry.date}
                  tags={entry.tags}
                  content={entry.content}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
