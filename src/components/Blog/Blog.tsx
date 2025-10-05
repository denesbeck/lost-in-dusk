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
      <div className="mt-[90px]">
        <FilterTags />
        <div className="flex overflow-auto justify-center py-4 max-h-[calc(100dvh-215px)]">
          {entries.length === 0 ? (
            <NoRecords />
          ) : (
            <div className="mr-6 grid h-[110%] justify-center sm:w-dvw sm:[grid-template-columns:repeat(auto-fit,minmax(31rem,0))] sm:gap-12 sm:px-10">
              {entries.map((entry) => (
                <BlogCard
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  description={entry.description}
                  date={entry.date}
                  tags={entry.tags}
                  content={entry.content}
                  cover={entry.cover}
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
