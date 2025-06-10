import { createPortal } from "react-dom";
import { ReactElement } from "react";

interface DarkLayoutProps {
  children: ReactElement;
  id?: string;
}

const DarkLayout = ({ children, id }: DarkLayoutProps) => {
  return createPortal(
    <div
      id={id}
      className="flex overflow-y-auto fixed top-0 left-0 z-50 flex-col justify-center items-center w-screen h-screen bg-root/30 backdrop-blur-md backdrop-brightness-90"
    >
      {children}
    </div>,
    document.getElementById("root")!,
  );
};

export default DarkLayout;
