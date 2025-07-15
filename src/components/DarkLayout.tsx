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
      className="flex overflow-y-auto fixed top-0 left-0 flex-col justify-center items-center w-screen h-screen bg-root/50 z-[888] backdrop-blur-lg backdrop-brightness-90 backdrop-grayscale"
    >
      {children}
    </div>,
    document.getElementById("root")!,
  );
};

export default DarkLayout;
