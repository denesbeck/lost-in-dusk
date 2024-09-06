import { Badge, Heading3 } from "@/components";
import { CERTIFICATES } from "@/config/data/about";
import { Stack } from "@chakra-ui/react";

const Certificates = () => {
  return (
    <Stack gap={4} maxW={"25rem"}>
      <Heading3>Certificates</Heading3>
      <div className="flex flex-wrap gap-8 justify-start w-full animate-textFocus">
        {CERTIFICATES.map((item, index) => (
          <Badge key={index} {...item} />
        ))}
      </div>
    </Stack>
  );
};

export default Certificates;
