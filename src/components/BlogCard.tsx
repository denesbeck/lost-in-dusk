import { Modal } from "@/components";
import { ReactElement, useState } from "react";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  content: ReactElement;
}
const BlogCard = ({ title, description, date, content }: BlogCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="flex flex-col py-3 px-6 space-y-2 h-auto ring-2 ring-teal-400 ring-offset-gray-900 transition-all duration-200 ease-in-out cursor-pointer hover:ring-offset-4 group min-h-[9rem] w-[21rem] min-w-[21rem] max-w-[75vw] animate-textFocus backdrop-blur-md active:ring-slate-200"
      >
        <h1 className="relative text-lg text-left whitespace-nowrap transition-all duration-200 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all after:duration-200 after:ease-in-out after:content-[''] group-hover:font-bold group-hover:after:w-full">
          {title}
        </h1>

        <p className="flex-1 text-sm text-left">{description}</p>
        <div className="flex justify-end items-center w-full">
          <div className="text-sm">{date}</div>
        </div>
      </button>
      {isVisible && <Modal close={() => setIsVisible(false)}>{content}</Modal>}
    </>
  );
};

export default BlogCard;
