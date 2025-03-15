import { DarkLayout, MacOSBar } from "@/components";
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
        className="grid w-max h-full ring-teal-500 lg:px-4 lg:pb-8 lg:ring-2 max-w-[90vw] animate-slideInFromBottom font-[DepartureMono] lg:h-[90vh] dark:text-slate-200"
      >
        <MacOSBar close={close} />
        <div className="overflow-auto px-2 h-full max-h-[calc(100vh-85px)] lg:max-h-[calc(100vh-170px)]">
          {children}
        </div>
      </div>
    </DarkLayout>
  );
};

export default Modal;
