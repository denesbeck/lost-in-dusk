import { Badge, Heading3 } from "@/components";
import { CERTIFICATES } from "@/config/data/about";

const Certificates = () => {
  return (
    <div className="hidden gap-4 lg:flex lg:flex-col max-w-[30rem]">
      <Heading3>Certificates</Heading3>
      <div className="flex flex-wrap gap-8 justify-start w-full animate-textFocus">
        {CERTIFICATES.map((item, index) => (
          <Badge key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
