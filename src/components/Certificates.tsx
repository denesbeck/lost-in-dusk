import { Badge, Heading3 } from "@/components";
import { CERTIFICATES } from "@/config/about";

const Certificates = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[30rem]">
      <Heading3>Certificates</Heading3>
      <div className="flex flex-wrap gap-8 justify-start w-full animate-text-focus">
        {CERTIFICATES.map((item) => (
          <Badge key={item.url} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
