import { MarkdownPage, Modal } from ".";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const BlogCard = ({
  id,
  title,
  description,
  date,
  tags,
  content,
}: BlogCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === `/blog/${id}`) return setIsVisible(true);
    setIsVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => navigate({ pathname: `/blog/${id}`, search })}
        className="flex flex-col py-3 px-6 space-y-2 border-b-2 transition-all duration-200 ease-in-out cursor-pointer sm:border-b-0 sm:ring-2 last:border-b-0 ring-offset-root border-secondary ring-primary group animate-text-focus min-h-[9rem] backdrop-blur-md sm:active:ring-active sm:hover:ring-offset-4"
      >
        <h1 className="relative text-lg text-left transition-all duration-200 ease-in-out group-hover:font-bold after:bg-primary after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-200 after:ease-in-out after:content-[''] group-hover:after:w-full">
          {title}
        </h1>

        <p className="flex-1 text-sm text-left">{description}</p>
        <div className="flex justify-end items-center space-x-2 w-full">
          <FaRegCalendarAlt />
          <div className="text-sm">{date}</div>
        </div>
      </button>
      {isVisible && (
        <Modal close={() => navigate({ pathname: `/blog`, search })}>
          <MarkdownPage id={id} tags={tags} markdownFile={content} />
        </Modal>
      )}
    </>
  );
};

export default BlogCard;
