import { ReactNode } from "react";

interface IBlogContainer {
  children: ReactNode;
}

const BlogContainer = ({ children }: IBlogContainer) => {
  return <div className="pb-12 lg:pb-0 max-w-[50rem]">{children}</div>;
};

export default BlogContainer;
