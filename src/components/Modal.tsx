import { Stack } from "@chakra-ui/react";
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
      <Stack
        ref={ref}
        w={"max-content"}
        className="h-full ring-teal-500 lg:px-4 lg:pb-8 lg:ring-2 w-[60rem] max-w-[90vw] animate-slideInFromBottom font-[DepartureMono] lg:h-[90vh] dark:text-slate-200"
      >
        <MacOSBar close={close} />
        <div className="h-full max-h-[calc(100vh-85px)] overflow-auto px-2 lg:max-h-[calc(100vh-170px)]">
          {children}
        </div>
      </Stack>
    </DarkLayout>
  );
};

export default Modal;
