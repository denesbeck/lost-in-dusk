import { DarkLayout } from "@/components";
import { MacOSBar } from ".";
import { ReactElement } from "react";
import { useClickOutside } from "@/hooks";

interface ModalProps {
  children: ReactElement;
  close: () => void;
}

const Modal = ({ children, close }: ModalProps) => {
  const ref = useClickOutside<HTMLDivElement>(close);
  return (
    <DarkLayout>
      <div
        ref={ref}
        className="flex flex-col w-max h-full ring-teal-500 lg:px-4 lg:pb-2 lg:ring-2 animate-slide-in-from-bottom max-w-[90vw] font-[DepartureMono] lg:h-[90vh] dark:text-slate-200"
      >
        <MacOSBar close={close} />
        <div className="overflow-y-auto overflow-x-hidden pr-4 pl-2 h-full max-h-[calc(100vh-85px)] lg:max-h-[calc(100vh-170px)]">
          {children}
        </div>
      </div>
    </DarkLayout>
  );
};

export default Modal;
