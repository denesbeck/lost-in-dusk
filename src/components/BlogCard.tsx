import { BlogEntry as BlogEntryInterface } from "@/interfaces/blog";
import { Like, Modal } from "@/components";
import { useState } from "react";
import { BlogEntry01 } from "@/blog-entries";

const BlogCard = ({ id, title, description, date }: BlogEntryInterface) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="flex flex-col py-3 px-6 space-y-2 h-auto ring-2 ring-teal-400 ring-offset-gray-900 transition-all duration-200 ease-in-out cursor-pointer hover:ring-offset-4 group w-[20rem] min-w-[16rem] max-w-[75vw] animate-textFocus backdrop-blur-md active:ring-slate-200"
      >
        <div className="relative text-base text-left transition-all duration-200 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all after:duration-200 after:ease-in-out after:content-[''] group-hover:font-bold group-hover:after:w-full">
          {title}
        </div>

        <p className="flex-1 text-sm text-left">{description}</p>
        <div className="flex justify-between items-center w-full">
          <Like id={id} />
          <div className="text-sm">{date}</div>
        </div>
      </button>
      {isVisible && (
        <Modal close={() => setIsVisible(false)}>
          <BlogEntry01 />
        </Modal>
      )}
    </>
  );
};

export default BlogCard;
