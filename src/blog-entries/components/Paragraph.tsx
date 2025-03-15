import { ReactNode } from "react";

interface IParagraph {
  children: ReactNode;
}

const Paragraph = ({ children }: IParagraph) => {
  return <p className="mb-3 last:mb-0">{children}</p>;
};

export default Paragraph;
