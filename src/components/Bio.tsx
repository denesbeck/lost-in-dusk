import { Heading3 } from "@/components";
import { BIO } from "@/config/data/about";

const Bio = () => {
  return (
    <div className="flex overflow-x-auto flex-col gap-2 px-2 max-w-[30rem] animate-textFocus">
      <Heading3>Bio</Heading3>
      <p className="overflow-y-auto max-h-44 break-words">{BIO}</p>
    </div>
  );
};

export default Bio;
