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
        className="px-4 pb-8 font-mono ring-2 ring-teal-500 w-[60rem] max-w-[90vw] animate-slideInFromBottom dark:text-slate-200"
      >
        <MacOSBar close={close} />
        <div className="overflow-auto px-2 max-h-[80vh]">{children}</div>
      </Stack>
    </DarkLayout>
  );
};

export default Modal;
