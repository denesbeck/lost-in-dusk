import { Stack } from "@chakra-ui/react";
import { DarkLayout, MacOSBar } from "@/components";
import { ReactElement } from "react";

interface BlogEntryProps {
  children: ReactElement;
  close: () => void;
}

const BlogEntry = ({ children, close }: BlogEntryProps) => {
  return (
    <DarkLayout>
      <Stack
        w={"max-content"}
        className="w-[60rem] max-w-[90vw] animate-slideInFromBottom px-4 pb-8 font-mono ring-2 ring-teal-500 dark:text-slate-200"
      >
        <MacOSBar close={close} />
        <div className="max-h-[80vh] overflow-auto px-2">{children}</div>
      </Stack>
    </DarkLayout>
  );
};

export default BlogEntry;
