import { Badge, Heading2 } from "@/components";
import { CERTIFICATES } from "@/config/data/about";
import { Stack } from "@chakra-ui/react";

const Certificates = () => {
  return (
    <Stack gap={4} maxW={"25rem"}>
      <Heading2 content="Certificates" />
      <div className="flex w-full animate-textFocus flex-wrap justify-start gap-8">
        {CERTIFICATES.map((item, index) => (
          <Badge key={index} {...item} />
        ))}
      </div>
    </Stack>
  );
};

export default Certificates;
