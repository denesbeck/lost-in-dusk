import { BlogEntry as BlogEntryInterface } from "@/interfaces/blog";
import { BlogEntry, Like } from "@/components";
import { useState } from "react";
import { BlogEntry01 } from "@/blog-entries";

const BlogCard = ({ id, title, description, date }: BlogEntryInterface) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="group relative flex h-auto w-[20rem] min-w-[16rem] max-w-[75vw] animate-textFocus cursor-pointer flex-col space-y-2 px-6 py-3 ring-2 ring-teal-400 ring-offset-gray-900 transition-all duration-200 ease-in-out hover:ring-offset-4 active:ring-slate-200"
      >
        <div className="-top-3.5 left-4 text-left text-base transition-all duration-200 ease-in-out group-hover:-top-4 group-hover:font-bold sm:absolute sm:px-2 dark:bg-slate-900">
          {title}
        </div>

        <p className="flex-1 text-left text-sm">{description}</p>
        <div className="flex w-full items-center justify-between">
          <Like id={id} />
          <div className="text-sm">{date}</div>
        </div>
      </button>
      {isVisible && (
        <BlogEntry close={() => setIsVisible(false)}>
          <BlogEntry01 />
        </BlogEntry>
      )}
    </>
  );
};

export default BlogCard;
