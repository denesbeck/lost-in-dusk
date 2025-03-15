import { ReactNode } from "react";

interface IBlogContainer {
  children: ReactNode;
}

const BlogContainer = ({ children }: IBlogContainer) => {
  return <div className="max-w-[50rem]">{children}</div>;
};

export default BlogContainer;
