import { ReactNode } from "react";

interface IQuote {
  children: ReactNode;
}
const Quote = ({ children }: IQuote) => {
  return (
    <div className="py-6">
      <p className="py-2 pl-4 mx-8 mb-2 italic border-l-2">{children}</p>
    </div>
  );
};

export default Quote;
