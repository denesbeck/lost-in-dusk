import { Stack } from "@chakra-ui/react";
import { Heading3 } from "@/components";
import { BIO } from "@/config/data/about";

const Bio = () => {
  return (
    <Stack
      gap={2}
      maxW={"30rem"}
      overflowX={"auto"}
      className="animate-textFocus"
      px={2}
    >
      <Heading3>Bio</Heading3>
      <p className="overflow-y-auto max-h-44 break-words">{BIO}</p>
    </Stack>
  );
};

export default Bio;
