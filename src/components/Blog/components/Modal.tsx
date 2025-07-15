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
        className="flex flex-col px-2 w-max h-full lg:px-4 lg:pb-2 lg:ring-2 ring-primary animate-slide-in-from-bottom bg-root/30 max-w-[100dvw] font-[DepartureMono] backdrop-blur-md lg:h-[90dvh] lg:max-w-[90dvw]"
      >
        <MacOSBar close={close} />
        <div className="overflow-y-auto overflow-x-hidden pr-4 pl-2 h-full max-h-[calc(100dvh-85px)] lg:max-h-[calc(100dvh-170px)]">
          {children}
        </div>
      </div>
    </DarkLayout>
  );
};

export default Modal;
